import React from 'react';
import { View, StyleSheet } from 'react-native';

const Modal = (props) => {
  return (
    <View style={props.isFullScreen && styles.fullscreen}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    borderWidth: 10,
    borderColor: 'red',
  }
})

export default Modal;