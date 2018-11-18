import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={props.size} color={props.color}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

export default Loader