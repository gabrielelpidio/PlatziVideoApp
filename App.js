/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestions-list'
import Api from './src/utils/api';
import CategoryList from './src/videos/containers/category-list';
import Player from './src/player/containers/player'
import Modal from './src/player/components/modal';
type Props = {};


export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
    loading: true,
    isFullscreen: false,
  }
  async componentDidMount() {
    const movies = await Api.getSuggestion(10);
    const categories = await Api.getMovies(10);
    console.log(movies);
    console.log(categories);
    this.setState({
      loading: false,
      suggestionList: movies,
      categoryList: categories,
    })
  }

  

  render() {
    return (
      <Home>
        <Player/>
        <Header />
        <Text>Search</Text>
        <Text>Categories</Text>
        <CategoryList
          list={this.state.categoryList}
          loading={this.state.loading}
        />
        <SuggestionList
          list={this.state.suggestionList}
          loading={this.state.loading}
        />
      </Home>
    );
  }
}


