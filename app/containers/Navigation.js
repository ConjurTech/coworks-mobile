import React, { Component, View, Text, Navigator, PropTypes } from 'react-native';
import Router from '../configs/Router';
import LandingPage from './LandingPage';
import Counter from '../components/Counter';

export default class CounterPage extends Component {
  constructor(props) {
    super(props);
    // this.initialRoute = {
    //   name: 'home',
    //   index: 0,
    //   component: LandingPage
    // }

    // Test Redux
    this.initialRoute = {
      name: 'counter',
      index: 0,
      component: Counter
    }
  }

  renderScene(route, navigator) {
    this.router = this.router || new Router(navigator)
    if (route.component) {
      return React.createElement(route.component, Object.assign({}, route.props,
        {
          actions: this.props.actions,
          state: this.props.state,
          router: this.router
        }
      ))
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
