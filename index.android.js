/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import LandingPage from './components/LandingPage'
import SplashPage from './components/SplashPage';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import PersonPage from './components/PersonPage';
import NoNavigatorPage from './components/NoNavigatorPage';

var {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} = React;

class CoWorksMobile extends React.Component {
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
    // <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
    //     onPress={() => navigator.pop()}>
    //   <Text style={{color: 'red', fontWeight: 'bold'}}>Incorrect route</Text>
    // </TouchableOpacity>
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <Text> No Route matching </Text>
      </View>
    );
  }

};

AppRegistry.registerComponent('CoWorksMobile', () => CoWorksMobile);
