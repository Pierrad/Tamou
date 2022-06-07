import React from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native'

const DismissKeyboardHOC = ({ children, flex }) => (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
		<View style={{ flex: flex }}>
			{children}
		</View>
	</TouchableWithoutFeedback>
)


DismissKeyboardHOC.propTypes = {
	children: PropTypes.node.isRequired,
	flex: PropTypes.number,
}

export default DismissKeyboardHOC