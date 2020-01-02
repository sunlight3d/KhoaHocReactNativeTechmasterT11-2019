/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MyView from './MyView.js';

export default class App extends Component {
  render() {
    // alert(JSON.stringify(ViewManager))
    return <View>
      <MyView style={{flex: 1, backgroundColor: 'red'}}/>
    </View>
  }
}


