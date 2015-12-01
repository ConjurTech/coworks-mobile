import React, { Component, View, Text, StyleSheet } from 'react-native';
import window from '../util/window';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../components/CustomTabBar';
import CompaniesPage from './CompaniesPage';

const { width, height } = window.getDimensions();

export default class TabExample extends React.Component {
  render() {
    return (
      <ScrollableTabView initialPage={1} renderTabBar={() => <CustomTabBar />} >
        <View tabLabel="PROJECTS" style={styles.tabView}>
          <Text>Projects</Text>
        </View>
        <View tabLabel="COMPANIES" style={styles.tabView}>
          <CompaniesPage />
        </View>
      </ScrollableTabView>
    )
  }
}

var styles = StyleSheet.create({
  tabView: {
    width: width,
    marginTop: 5
  },
});
