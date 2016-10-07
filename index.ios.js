'use strict'

import React, { Component } from 'react';
import {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginPage from './LoginPage'

class Motivation extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: LoginPage,
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Motivation', () => Motivation);
