import React, { Component, StyleSheet, View, Text } from 'react-native';

export default class CompanyRow extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>Company: {this.props.name}</Text>
        <Text>Address: {this.props.logo_url}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  }
});
