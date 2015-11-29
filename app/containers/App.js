'use strict';

import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import CoWorksApp from './CoWorksApp';
import configureStore from '../store/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <CoWorksApp />}
      </Provider>
    );
  }
}
