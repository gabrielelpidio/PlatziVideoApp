import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

const Layout = (props) => {
  return (
    <View style={!props.isFullscreen ? styles.container : styles.fullscreenContainer}>

        <TouchableWithoutFeedback
          onPress={props.onPress}
          style={styles.video}
        >
            {props.video}
        </TouchableWithoutFeedback>
        <View style={styles.overlay}>
        {
          props.onScreen &&
          props.playPause
        }
        {
          props.loading  &&
          props.loader
        }
      </View>
      {
        props.onScreen &&
        props.controls
      }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  fullscreenContainer: {
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'black',
  },
  overlay:{
    position:'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Layout;
