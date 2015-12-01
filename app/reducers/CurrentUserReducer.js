import { SIGN_IN_SUCCESS } from '../actions/SignInActions';
import Immutable from 'immutable';

let initialState = Immutable.fromJS({ id: 0 });

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
    return state.set(action.currentUser);
    default:
    return state;
  }
};
