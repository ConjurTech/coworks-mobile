import React, { Component, View, Text, Navigator, PropTypes } from 'react-native';
import { Router, InitialRoute } from '../Router';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.initialRoute = InitialRoute;
    this.configureScene = this.configureScene.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    this.router = this.router || new Router(navigator)
    if (route.component) {
      return React.createElement(route.component, Object.assign({}, route.props, {router: this.router, navigator: navigator}));
    }
  }

  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromBottomAndroid;
  }

  render() {
    return (
      <Navigator
        initialRoute={this.initialRoute}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
        />
    )
  }
}
