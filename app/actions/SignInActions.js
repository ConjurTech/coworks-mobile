import Request from '../Request';
import { urls } from '../config/environment';

export const SIGNING_IN = 'SIGN_IN'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'
signIn = () => {
  return (dispatch, getState) => {
    dispatch({ type: SIGNING_IN });

    return Request.post(urls.SIGN_IN, getState().signIn.get("details"))
    .then(({data, headers}) => {
      dispatch({
        type: SIGN_IN_SUCCESS,
        currentUser: data,
        headers: headers
      })
    })
    .catch((err) => {
      dispatch({
        type: SIGN_IN_FAILURE,
        errorMessage: err.errors.join('. ')
      })
    })
    .done();
  }
}

export const UPDATE_SIGN_IN_DETAILS = 'UPDATE_SIGN_IN_DETAILS'
updateSignInDetails = (details) => {
  return {
    type: UPDATE_SIGN_IN_DETAILS,
    details
  }
}

export default { signIn, updateSignInDetails };
