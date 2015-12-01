import queryString from 'query-string';

exports.get = function (url, params) {
  if (params) {
    url += '?' + queryString.stringify(params)
  }
  return fetch(url)
  .then(checkStatus)
  .then(parseJSON)
}


exports.post = function (url, body) {
  let fetchOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }

  return fetch(url, fetchOptions)
  .then(checkStatus)
  .then(parseJSON)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.status)

    // Try to parse the errors array
    try {
      error.errors = JSON.parse(response._bodyText).errors
    } catch (e) {
      error.errors = ['An unknown error occured']
    }

    // Attach the raw response
    error.response = response

    throw error
  }
}

function parseJSON(response) {
  return response.json()
}
