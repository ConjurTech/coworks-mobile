'use strict';

import { Component } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux/native';
import reducer from '../reducers';

const store = createStore(reducer);

export default class CounterPage extends Component {
  render() {
    var navigator = this.props.navigator;
    return (
      <Provider store={store}>
        {() => <CounterApp />}
      </Provider>
    );
  }

}
