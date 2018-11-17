/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/containers/home'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Text>Header</Text>
        <Text>Search</Text>
        <Text>Categories</Text>
        <Text>Sugerencias</Text>
      </Home>
    );
  }
}
