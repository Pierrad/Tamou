import React from 'react'
import PropTypes from 'prop-types'


import * as SC from './styled'

const ActionButton = ({ title, onPress, primary, secondary, isOutlined}) => (
	<SC.Container>
		<SC.Button
			onPress={onPress}
			primary={primary}
			secondary={secondary}
			isOutlined={isOutlined}
		>
			<SC.Text
				primary={primary}
				isOutlined={isOutlined}
				secondary={secondary}
			>
				{title}
			</SC.Text>
		</SC.Button>
	</SC.Container>

)

ActionButton.propTypes = {
	title: PropTypes.string,
	onPress: PropTypes.func,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	isOutlined: PropTypes.bool,
}

export default ActionButton


