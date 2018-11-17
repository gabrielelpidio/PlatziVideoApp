import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native'
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import VerticalSeparator from '../components/vertical-separator';

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No se encontraron sugerencias :("/>
  itemSeparator = () => <VerticalSeparator/>
  
  render() {
    const list = [
      {
        title: 'Avengers 4',
        key: '1'
      },
      {
        title: 'Detective Pikachu',
        key: '2'
      }

    ]
    return (
      <Layout
        title='Recomendado para ti'
      >
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </Layout>
    );
  }
}

export default SuggestionList