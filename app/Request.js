import queryString from 'query-string';
import { store } from './containers/App';

exports.get = function (url, params) {
  if (params) {
    url += '?' + queryString.stringify(params)
  }
  return fetch(url, { headers: getHeaders() })
  .catch(normalizeErrors)
  .then(checkStatus)
  .then(parseJSON)
}

exports.post = function (url, body) {
  let fetchOptions = {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(body)
  }

  return fetch(url, fetchOptions)
  .catch(normalizeErrors)
  .then(checkStatus)
  .then(parseJSON)
}

function getHeaders() {
  let commonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  let authHeaders = store.getState().currentUser.get("authHeaders")

  return authHeaders.merge(commonHeaders).toJS();
}

// Standardize errors to always have an errors array (same as rails' format),
// and a response key. Errors that are caught here are typically network errors,
// i.e. no connection, cannot resolve DNS, etc.
function normalizeErrors(error) {
  error.errors = [error.message];
  error.response = null;

  throw error;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.status)

    // Try to parse the errors array
    try {
      let body = JSON.parse(response._bodyText);
      error.errors = body.errors || [body.error]
    } catch (e) {
      error.errors = ['An unknown error occured']
    }

    // Attach the raw response
    error.response = response

    throw error
  }
}

function parseJSON(response) {
  return {
    headers: response.headers,
    data: response.json()
  }
}
