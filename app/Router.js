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


// Change this for debugging
// const InitialRoute = {
//   name: 'counter',
//   index: 0,
//   component: Counter
// }

const InitialRoute = {
  name: 'landing',
  index: 0,
  component: LandingPage
}

// const InitialRoute = {
//   name: 'companies',
//   index: 0,
//   component: CompaniesPage
// }

module.exports = { Router, InitialRoute }
