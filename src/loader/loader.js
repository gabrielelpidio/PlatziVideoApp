import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader = (props) => {
  return (
    <View style={props.style}>
      <ActivityIndicator size={props.size} color={props.color}/>
    </View>
  )
}



export default Loader