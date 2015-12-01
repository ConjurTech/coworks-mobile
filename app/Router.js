import React, { Navigator, Platform, BackAndroid } from 'react-native';
import SignInPage from './containers/SignInPage';
import LandingPage from './containers/LandingPage';
import CompaniesPage from './containers/CompaniesPage';
import ProjectsCompaniesPage from './containers/ProjectsCompaniesPage';

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


// Change this for easier debugging
// Don't remove my companies
// I don't want to touch my phone to look at my change.
const InitialRoute = {
  name: 'doesntmatterfornowchangethislater',
  index: 0,
  // component: LandingPage
  // component: CompaniesPage
  component: ProjectsCompaniesPage
}

module.exports = { Router, InitialRoute }
