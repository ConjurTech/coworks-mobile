'use strict';

import React from 'react-native';
import LandingPage from '../components/LandingPage';
import SignInPage from '../components/user/SignInPage';

// TODO: remove after learning
// Below are example routes
import SplashPage from '../components/SplashPage';
import LoginPage from '../components/LoginPage';
import MainPage from '../components/MainPage';
import PersonPage from '../components/PersonPage';
import NoNavigatorPage from '../components/NoNavigatorPage';
import CounterPage from '../components/CounterPage';

var {
  AppRegistry,
  Component,
  Text,
  View,
  Navigator,
} = React;

export default class App extends React.Component {
  // Change initialRoute to something else for easier debugging.
  render() {
    return (
      <Navigator
          initialRoute={{id: 'LandingPage', name: 'LandingPage'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }} />
    );
  }

  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'LandingPage') {
      return (
        <LandingPage
          navigator={navigator} />
      );
    }

    if (routeId === 'SignInPage') {
      return (
        <SignInPage
          navigator={navigator} />
      );
    }

    if (routeId === 'CounterPage') {
      return (
        <CounterPage
          navigator={navigator} />
      );
    }

    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
          navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
            navigator={navigator} />
      );
    }
    if (routeId === 'PersonPage') {
      return (
        <PersonPage
          navigator={navigator} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }

  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <Text> No Route matching </Text>
      </View>
    );
  }

};
