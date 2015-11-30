import React, { Component, View, Text, Navigator, PropTypes } from 'react-native';
import { Router, InitialRoute } from '../configs/Router';

export default class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.initialRoute = InitialRoute;
  }

  renderScene(route, navigator) {
    this.router = this.router || new Router(navigator)
    if (route.component) {
      return React.createElement(route.component, Object.assign({}, route.props));
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
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
        />
    )
  }
}
