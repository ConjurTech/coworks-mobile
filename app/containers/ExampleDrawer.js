import React, { Component, View, Text } from 'react-native';
import Drawer from 'react-native-drawer';

class ControlPanel extends React.Component {
  render() {
    return (
      <View>
        <Text>This is control panel</Text>
      </View>
    )
  }
}

class MainView extends React.Component {
  render() {
    return (
      <View>
        <Text>This is main view</Text>
      </View>
    )
  }
}

export default class Application extends React.Component {
  closeControlPanel() {
    this.refs.drawer.close();
  }
  openControlPanel() {
    this.refs.drawer.open()
  }
  render() {
    return (
      <Drawer
        type="overlay"
        content={<ControlPanel />}
        tapToClose={true}
        openDrawerOffset={.25} // 20% gap on the right side of drawer
        panCloseMask={.5}
        closedDrawerOffset={-3}
        styles={{
          drawer: {backgroundColor: 'grey', shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
          main: {paddingLeft: 3}
        }}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        >
        <MainView />
      </Drawer>
    )
  }
}
