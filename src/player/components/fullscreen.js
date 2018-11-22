import React from 'react'
import { Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const Fullscreen = (props) => {
	return (
		<TouchableWithoutFeedback
			onPress={props.onPress}
			>
			<Icon name="size-fullscreen" style={styles.fullscreen} />
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	fullscreen: {
		fontSize: 20,
		color: 'white',
		paddingHorizontal: 20
	}
})

export default Fullscreen
