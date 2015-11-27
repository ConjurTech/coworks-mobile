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
      <View>
        <Text>Hi</Text>
      </View>  
    )
  }
}
