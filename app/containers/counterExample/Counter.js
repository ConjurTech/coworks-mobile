import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class Counter extends Component {
  render() {
    var counter = this.props.state
    var { increment, incrementIfOdd, incrementAsync, decrement } = this.props.actions;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Clicked: {counter} times</Text>
        <TouchableHighlight onPress={increment}>
          <Text style={styles.text}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={decrement}>
          <Text style={styles.text}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={incrementIfOdd}>
          <Text style={styles.text}>Increment if odd</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => incrementAsync()}>
          <Text style={styles.text}>Increment async</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Counter;
