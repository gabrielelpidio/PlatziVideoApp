import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const Close = (props) => {
  return ( 
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}
    >
      <Icon name="close" style={styles.button}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
  },
  container: {
    width: 25,
    height: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
 
export default Close;