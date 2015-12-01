'use strict';

import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import Navigation from './Navigation';
import configureStore from '../store/configureStore';

export const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Navigation />}
      </Provider>
    );
  }
}
