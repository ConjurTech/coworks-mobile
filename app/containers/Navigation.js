import React, { Component, View, Text, Navigator, PropTypes } from 'react-native';
import { Router, InitialRoute } from '../Router';
import Drawer from '../components/Drawer';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.initialRoute = InitialRoute;
    this.configureScene = this.configureScene.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);

  }

  closeDrawer() {
    this.refs.navigator.refs.drawer.refs.drawer.close();
  }

  openDrawer() {
    this.refs.navigator.refs.drawer.refs.drawer.open();
  }

  renderScene(route, navigator) {
    this.router = this.router || new Router(navigator)
    if (route.component) {
      const mainPage = React.createElement(route.component, Object.assign({}, route.props, {router: this.router, navigator: navigator}));
      return (
        <Drawer
          ref="drawer"
          main={mainPage}
          router={this.router}
          openDrawer={this.openDrawer}
          closeDrawer={this.closeDrawer}
          />
      )

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
        ref="navigator"
        initialRoute={this.initialRoute}
        configureScene={this.configureScene}
        renderScene={this.renderScene.bind(this)}
        />
    )
  }
}
