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
    return state.set(action.currentUser).merge({authHeaders: action.headers});
    default:
    return state;
  }
};
