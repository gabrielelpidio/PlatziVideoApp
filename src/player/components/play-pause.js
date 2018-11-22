import React from 'react'
import { 
  TouchableHighlight, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'


const PlayPause = (props) => {
  return (  
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor="rgba(0,0,0,0)"
      style={styles.container}
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}
    >
      {
       props.paused ?
       <Icon name="control-play" style={styles.button}></Icon>
       : 
       <Icon name="control-pause" style={styles.button} />
      }
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button:  {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold'
  },
  container:  {
      position: 'absolute',
      justifyContent: 'center',
      paddingHorizontal: 10,
      height: 25,
      marginRight: 10,
      marginVertical: 5,
  }

})
 
export default PlayPause;