import React from 'react-native';
import Button from 'apsl-react-native-button';
import window from '../util/window';
import { mapDispatchToProps, connect } from '../util/Connectors';

const {
  StyleSheet,
  Component,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  BackAndroid
} = React;

class SignInPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const username = this.props.state.getIn(['details', 'username']);
    const password = this.props.state.getIn(['details', 'password']);
    const { signIn, updateSignInDetails } = this.props.actions;

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
          <TextInput
            keyboardType="email-address"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => updateSignInDetails({ username: text })}
            value={username}
            />
          <TextInput
            secureTextEntry={true}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => updateSignInDetails({ password: text })}
            value={password}
            />
          <Button onPress={signIn}>
            OK
          </Button>
        </View>
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return {
    state: state.signIn
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
