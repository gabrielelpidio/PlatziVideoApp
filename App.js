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
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestions-list'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header/>
        <Text>Search</Text>
        <Text>Categories</Text>
        <SuggestionList/>
        <Text>Sugerencias</Text>
      </Home>
    );
  }
}

