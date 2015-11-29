'use strict';

import React from 'react-native';
import App from './app/containers/App';

var {
  AppRegistry,
  Component,
} = React;

class CoWorksMobile extends React.Component {
  render() {
    return (
      <App/>
    );
  }
};

AppRegistry.registerComponent('CoWorksMobile', () => CoWorksMobile);
