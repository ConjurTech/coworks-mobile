import { SIGN_IN, UPDATE_SIGN_IN_DETAILS } from '../constants/ActionTypes';
import Immutable from 'immutable';

let initialState = Immutable.fromJS({ details: { username: "", password: "" } });
export default function signIn(state = initialState, action) {
  switch (action.type) {
  case SIGN_IN:
    return state;
  case UPDATE_SIGN_IN_DETAILS:
    return state.updateIn(["details"], details => details.merge(action.details));
  default:
    return state;
  }
};
