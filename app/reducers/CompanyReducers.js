import { GET_COMPANIES } from '../constants/ActionTypes';

export default function companies(state = {loaded: false, companies:[]}, action) {
  switch (action.type) {
  case GET_COMPANIES:
    return {loaded: true, companies: action.companies};
  default:
    return state;
  }
};
