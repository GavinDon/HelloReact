import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet,
  Navigator, Text,
  View, ScrollView,
  Image, ListView,
  TouchableNativeFeedback
} from 'react-native';
import AppNavigator from './AppNavigator'
export default class HelloReact extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
/**
 * ==>ES6新语法 和lamda语法有点相似。
 *  带双引号的这个“”代表的是这个APP的名称 后面的代表的是所要显示的组件名称，
 */
AppRegistry.registerComponent('HelloReact', () => HelloReact);
