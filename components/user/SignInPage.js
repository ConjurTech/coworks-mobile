'use strict';

import React from 'react-native';
import Media from '../../helpers/media';

const {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableHighlight,
} = React;

const SCREEN_WIDTH = Media.getScreenWidth();

export default class SignInPage extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              Logo
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              Find, List, grow your business {'\n'}
              all in one mobile app
            </Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            SignIn Stuffs
          </Text>
        </View>
      </View>
    )
  }
}
