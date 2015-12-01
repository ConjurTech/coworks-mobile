import { SIGNING_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, UPDATE_SIGN_IN_DETAILS } from '../actions/SignInActions';
import Immutable from 'immutable';

let initialState = Immutable.fromJS(
  {
    details: { email: "", password: "" },
    isFetching: false,
    isFailure: false,
    errorMessage: ""
  }
);

export default function signIn(state = initialState, action) {
  switch (action.type) {
    case SIGNING_IN:
    return state.set('isFetching', true);

    case SIGN_IN_SUCCESS:
    return state.merge({ isFetching: false, isFailure: false });

    case SIGN_IN_FAILURE:
    return state.merge({ isFetching: false, isFailure: true, errorMessage: action.errorMessage });

    case UPDATE_SIGN_IN_DETAILS:
    return state.updateIn(["details"], details => details.merge(action.details));

    default:
    return state;
  }
};
