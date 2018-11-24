import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native'
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import VerticalSeparator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';
import Loader from '../../loader/loader';
import { connect } from 'react-redux'

function mapStateToProps(state) {
  // debugger
  return {
    loading: state.isSuggestionLoading,
    list: state.suggestionList
  }
}
class SuggestionList extends Component {
  keyExtractor = item => item.id.toString()
  renderEmpty = () => <Empty text="No se encontraron sugerencias :("/>
  itemSeparator = () => <VerticalSeparator/>
  renderItem = ({ item }) => {
    return <Suggestion {...item}/>
  }
  render() {
    
    return (
      <Layout
        title='Recomendado para ti'
      >
      {
        this.props.loading ?
        <Loader 
        size="large"
        color="#263E4C"
        />
        :
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      }
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(SuggestionList)