import { GET_COMPANIES } from '../constants/ActionTypes';
import Immutable from 'immutable';

let initialState = Immutable.fromJS({loaded: false, companies:[]});
export default function companies(state = initialState, action) {
  switch (action.type) {
  case GET_COMPANIES:
    state = state.set('loaded', true);
    state = state.set('companies', state.get('companies').mergeDeep(action.companies));
    return (state);
  default: 
    return state;
  }
};
