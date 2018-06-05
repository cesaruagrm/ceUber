/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    StatusBar
} from 'react-native';
import {Navigation} from './Componentes/Rutas';



console.disableYellowBox=['Remote debugger'];
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar
              backgroundColor= "#1c313a"
              barStyle="light-content"
          />
        <Navigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
