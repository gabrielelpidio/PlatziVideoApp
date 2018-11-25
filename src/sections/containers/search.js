import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native';


export class Search extends Component {
  handleSubmit = () => {
    console.log(this.state.text);
  }
  handleChangeText = (text) => {
    this.setState({
      text
    })
  }
  render() {
    return (
      <TextInput
        placeholder="Busca tu película favorita"
        autoCorrect={false}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        handleSubmit={this.handleSubmit}
        onChangeText={this.handleChangeText}
        style={styles.input}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
    margin: 10
  }
})

export default Search
