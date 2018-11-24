import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Loader from '../../loader/loader';
import Layout from '../components/category-list-layout'
import HorizontalSeparator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import { connect } from 'react-redux'

function mapStateToProps(state) {
  // debugger
  return {
    loading: state.isCategoryLoading,
    list: state.categoryList
  }
}

class CategoryList extends Component {
  keyExtractor = item => item.id.toString()
  itemSeparator = () => <HorizontalSeparator/>
  renderItem = ({ item }) => {
    return <Category {...item}/>
  }
  
  render() {
    return (
      <Layout
      title="Categorias"
      >
        {
        this.props.loading ?
        <Loader 
        size="large"
        color="#263E4C"
        />
        :
        <FlatList
          horizontal
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

export default connect(mapStateToProps)(CategoryList)
