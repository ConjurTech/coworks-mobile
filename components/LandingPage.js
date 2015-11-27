'use strict';

import React from 'react-native';
const {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableHighlight,
} = React;

const SCREEN_WIDTH = require('Dimensions').get('window').width;
const styles = StyleSheet.create({
  signIn: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  register: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.gotoSignIn = this.gotoSignIn.bind(this);
    this.gotoRegister = this.gotoRegister.bind(this);
    this.gotoHome = this.gotoHome.bind(this);
  }

  render() {
    var navigator = this.props.navigator;
    return (
      <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 20}}>
            Logo
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            Find, List, grow your business {'\n'}
            all in one mobile app
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
          <View style={{borderRadius: 30, backgroundColor: '#8cbe5e', width: SCREEN_WIDTH-80, height: 50, justifyContent: 'center', marginTop: 20}}>
            <TouchableHighlight
              onPress={this.gotoSignIn}>
              <Text style={styles.signIn}>
                Sign In
              </Text>
            </TouchableHighlight>
          </View>
          <View style={{borderRadius: 30, backgroundColor: '#62a0e7', width: SCREEN_WIDTH-80, height: 50, justifyContent: 'center', marginTop: 10}}>
            <TouchableHighlight
              onPress={this.gotoRegister}>
              <Text style={styles.register}>
                Create Account
              </Text>
            </TouchableHighlight>
          </View>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
            <TouchableHighlight
              onPress={this.gotoHome}>
              <Text>Skip now, I'll sign in later</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }

  gotoSignIn() {
    this.props.navigator.push({
      id: 'MainPage',
      name: 'MainPage',
    });
  }

  gotoRegister() {
    this.props.navigator.push({
      id: 'MainPage',
      name: 'MainPage',
    });
  }

  gotoHome() {
    this.props.navigator.push({
      id: 'MainPage',
      name: 'MainPage',
    });
  }
}
