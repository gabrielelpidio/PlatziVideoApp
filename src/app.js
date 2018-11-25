import React, { Component } from 'react'
import { Text } from 'react-native';
import { connect } from 'react-redux'


import Home from './screens/containers/home'
import Header from './sections/components/header'
import SuggestionList from './videos/containers/suggestions-list'
import Api from './utils/api';
import CategoryList from './videos/containers/category-list';
import Movie from './screens/containers/movie';
import Search from './sections/containers/search';




export class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = await Api.getMovies(10);
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await Api.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
    
  }

  render() {
    if (this.props.selectedMovie) {
      return <Movie/>
    } else {
     return(
      <Home>
        <Header />
        <Search />
        <Text>Categories</Text>
        <CategoryList/>
        <SuggestionList/>
      </Home>
     ) 
    }
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(AppLayout)




