import { SIGN_IN_SUCCESS } from '../actions/SignInActions';
import Immutable from 'immutable';

// TODO: read from persistent store so closing the app doesn't log the user out
let initialState = Immutable.fromJS(
  {
    id: 0,
    authHeaders: {
      'client': 'coworks-android',
      'token-type': 'Bearer'
    }
  }
);

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS:

    let mutableState = action.currentUser

    // Select only auth related headers
    mutableState.authHeaders = {
      'access-token': action.headers.get('access-token'),
      'client': action.headers.get('client'),
      'uid': action.headers.get('uid'),
      'expiry': action.headers.get('expiry'),
    }
    
    // Rebuild whole state as everything should be changed
    state = Immutable.fromJS(mutableState)
    return state;

    default:
    return state;
  }
};
