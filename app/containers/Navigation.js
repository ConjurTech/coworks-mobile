import React, { Component, View, Text, Navigator, PropTypes, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Drawer from 'react-native-drawer';
import { Router, InitialRoute } from '../Router';

class DrawerList extends React.Component {
  constructor(props) {
    super(props);
    this.toLanding = this.toLanding.bind(this);
    this.toSignIn = this.toSignIn.bind(this);
    this.toCompanies = this.toCompanies.bind(this);
  }
  toLanding() {
    this.props.closeDrawer();
    this.props.router.slideToLanding();
  }
  toSignIn() {
    this.props.closeDrawer();
    this.props.router.slideToSignIn();
  }
  toCompanies() {
    this.props.closeDrawer();
    this.props.router.slideToCompanies();
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: "column", backgroundColor: "white"}}>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toLanding}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('../assets/images/nav-icons-cat.png')}
              style={styles.drawerIcon} />
            <Text style={styles.drawerFont}>Landing Page</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toSignIn}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('../assets/images/nav-icons-fav.png')}
              style={styles.drawerIcon} />
            <Text style={styles.drawerFont}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toCompanies}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('../assets/images/nav-icons-map.png')}
              style={styles.drawerIcon} />
            <Text style={styles.drawerFont}>Companies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toCompanies}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('../assets/images/nav-icons-msg.png')}
              style={styles.drawerIcon} />
            <Text style={styles.drawerFont}>Companies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toCompanies}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('../assets/images/nav-icons-issue.png')}
              style={styles.drawerIcon} />
            <Text style={styles.drawerFont}>Companies</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.initialRoute = InitialRoute;
    this.configureScene = this.configureScene.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);

  }

  closeDrawer() {
    this.refs.navigator.refs.drawer.close();
  }

  openDrawer() {
    this.refs.navigator.refs.drawer.open();
  }

  renderScene(route, navigator) {
    this.router = this.router || new Router(navigator)
    if (route.component) {
      return (
        <Drawer
          ref="drawer"
          type="overlay"
          content={<DrawerList
            router={this.router}
            openDrawer={this.openDrawer}
            closeDrawer={this.closeDrawer}
            />}
            tapToClose={true}
            openDrawerOffset={.25} // 20% gap on the right side of drawer
            panCloseMask={.5}
            closedDrawerOffset={-3}
            styles={{
              drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
              main: {paddingLeft: 3}
            }}
            tweenHandler={(ratio) => ({main: { opacity: (1.2-ratio/(1.2)) }})}
            >
            {React.createElement(route.component, Object.assign({}, route.props, {router: this.router, navigator: navigator}))}
          </Drawer>
        )

      }
    }

    configureScene(route) {
      if (route.sceneConfig) {
        return route.sceneConfig;
      }
      return Navigator.SceneConfigs.FloatFromBottomAndroid;
    }

    render() {
      return (
        <Navigator
          ref="navigator"
          initialRoute={this.initialRoute}
          configureScene={this.configureScene}
          renderScene={this.renderScene.bind(this)}
          />
      )
    }
  }

  const styles = StyleSheet.create({
    drawerRow: {
      paddingTop: 20,
      paddingBottom: 20,
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
    },
    drawerIcon: {
      width: 22,
      height: 22,
      marginLeft: 20,
      marginRight: 20
    },
    drawerFont: {
      fontSize: 20
    }
  });
