import React, { Component, Image, StyleSheet, View, Text } from 'react-native';

export default class CompanyRow extends Component {
  render() {
    const logo = this.props.logo ? {uri: this.props.logo} : require('../../assets/images/placeholder-square.jpg');
    return (
      <View style={styles.card}>
        <View style={styles.container}>
          <Image
            source={logo}
            style={styles.thumbnail}
            />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{this.props.name}</Text>
            <Text style={styles.p}>34 out of 39 clients approved</Text>
            <Text style={styles.p}>5 Reviews</Text>
            <Text style={styles.pLast}>Specialises in Marketing</Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    borderRightWidth: 1.5,
    borderBottomWidth: 1.2,
    backgroundColor: '#fff',
    borderColor: 'rgba(3,3,3,0.2)',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 5
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 8
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  p: {
    fontSize: 14,
    marginBottom: 6,
    marginLeft: 3
  },
  pLast: {
    fontSize: 14,
    marginLeft: 3
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
});
