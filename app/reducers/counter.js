const types = require('../constants/ActionTypes');
const { INCREMENT_COUNTER, DECREMENT_COUNTER } = require('../constants/ActionTypes');

let initialState = 0;
exports = function counter(state, action) {
  state = state || initialState;
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + 1;
  case DECREMENT_COUNTER:
    return state - 1;
  default:
    return state;
  }
}
