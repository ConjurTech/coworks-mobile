import React, { Navigator } from 'react-native';
import SignInPage from '../containers/user/SignInPage';
import Counter from '../components/Counter';

class Router {
  constructor(navigator) {
    this.navigator = navigator;
  }

  push(props, route) {
    let routesList = this.navigator.getCurrentRoutes();
    let nextIndex = routesList[routesList.length - 1].index + 1;
    route.props = props;
    route.index = nextIndex;
    this.navigator.push(route);
  }

  pop() {
    this.navigator.pop();
  }


  toSignIn(props) {
    this.push(props, {
      component: SignInPage,
      name: 'signIn',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottomAndroid
    })
  }

  toCounter(props) {
    this.push(props, {
      component: Counter,
      name: 'counter',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottomAndroid
    })
  }

  replaceWithLandingPage() {
    this.navigator.popToTop();
  }

}

module.exports = Router
