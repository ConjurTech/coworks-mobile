import React from 'react-native';
import Button from 'apsl-react-native-button';
import { mapDispatchToProps, connect } from '../Connector';

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
  render() {
    const state = this.props.state.toJS();
    const email = this.props.state.getIn(['details', 'email']);
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
        {
          state.isFailure &&
          <Text style={{fontSize: 14, textAlign: 'center'}}>
            {state.errorMessage}
          </Text>
        }
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
          <TextInput
            keyboardType="email-address"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => updateSignInDetails({ email: text })}
            value={email}
            />
          <TextInput
            secureTextEntry={true}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => updateSignInDetails({ password: text })}
            value={password}
            />
          <Button onPressOut={signIn}>
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
