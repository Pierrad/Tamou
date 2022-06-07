import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ChatScreen = (props) => {
	const { headerData } = props

	return (
		<SC.Container>
			<SC.Header {...headerData} />
			
		</SC.Container>
	)
}

ChatScreen.propTypes = {
	headerData: PropTypes.shape({
		onButtonPress: PropTypes.func,
		color: PropTypes.string,
		colorInverted: PropTypes.string,
		title: PropTypes.string,
		onDotPress: PropTypes.func,
	}),
	translations: PropTypes.object,
}

export default ChatScreen