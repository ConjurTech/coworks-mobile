import React, { Navigator, Platform, BackAndroid } from 'react-native';
import SignInPage from './containers/SignInPage';
import LandingPage from './containers/LandingPage';
import CompaniesPage from './containers/CompaniesPage';

// Counter is an example.
// TODO: Remove after learning basics.
import Counter from './containers/Counter';

class Router {
  constructor(navigator) {
    this.navigator = navigator;
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', () => {
        if (this.navigator.getCurrentRoutes().length > 1) {
          this.pop();
          return true;
        }
        return false;
      });
    }
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

  slideToSignIn(props) {
    this.push(props, {
      component: SignInPage,
      name: 'signIn',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottomAndroid
    })
  }

  slideToCounter(props) {
    this.push(props, {
      component: Counter,
      name: 'counter',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottomAndroid
    })
  }

  replaceWithHome(props) {
    let homeRoute = {
      index: 0,
      props: props,
      component: CompaniesPage,
      name: 'companies',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottomAndroid
    }
    this.navigator.immediatelyResetRouteStack([homeRoute])
  }

  replaceWithLandingPage() {
    this.navigator.popToTop();
  }

}

const InitialRoute = {
  name: 'landing',
  index: 0,
  component: LandingPage
}

module.exports = { Router, InitialRoute }
