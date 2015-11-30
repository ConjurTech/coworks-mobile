import { SIGN_IN, UPDATE_SIGN_IN_DETAILS } from '../constants/ActionTypes';
import Request from '../services/Request';
import { urls } from '../configs/environment';

signIn = () => {
  return dispatch => Request.post(urls.SIGN_IN, { user: {/* How to get state? */} })
  .then((results) => {
    dispatch({
      type: SIGN_IN,
      currentUser: results.user
    })
  })
  .catch(err => {

  })
  .done();
}

updateSignInDetails = (details) => {
  return {
    type: UPDATE_SIGN_IN_DETAILS,
    details
  }
}

module.exports = { signIn, updateSignInDetails };
