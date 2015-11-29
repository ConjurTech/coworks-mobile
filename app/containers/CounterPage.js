'use strict';

import React, { Component, AppRegistry } from 'react-native';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux/native';
import reducer from '../reducers';
import CounterApp from './CounterApp';

const store = configureStore();

export default class CounterPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <CounterApp />}
      </Provider>
    );
  }
}
