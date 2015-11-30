import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

increment = () => {
  return {
    type: INCREMENT_COUNTER
  };
}

decrement = () => {
  return {
    type: DECREMENT_COUNTER
  };
}

incrementIfOdd = () => {
  return (dispatch, getState) => {
    var { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

incrementAsync = (delay) => {
  delay = delay || 1000;
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

module.exports = { increment, decrement, incrementIfOdd, incrementAsync };
