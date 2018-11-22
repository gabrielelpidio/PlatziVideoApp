import React from 'react';
import { Slider, StyleSheet } from 'react-native';

const ProgressBar = (props) => {
  return (
    <Slider
    style={styles.progress}
    value={props.time}
    onSlidingComplete={props.onSlidingComplete}
    maximumValue={props.maximumValue}
    onValueChange={props.onValueChange}
    thumbTintColor="white"
    minimumTrackTintColor="white"
    />
   );
}

styles = StyleSheet.create({
  progress: {
    width: 230,
    color: 'white'
  }
})



export default ProgressBar;
