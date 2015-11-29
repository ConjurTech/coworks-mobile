import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
};

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
};

export function incrementIfOdd() {
  return (dispatch, getState) => {
    var { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
};

export function incrementAsync(delay) {
  delay = delay || 1000;
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
};
