import React from 'react'
import PropTypes from 'prop-types'


import * as SC from './styled'

const ActionButton = ({ title, onPress, primary, secondary, isOutlined, underlayColor}) => (
	<SC.Container>
		<SC.Button
			onPress={onPress}
			primary={primary}
			secondary={secondary}
			isOutlined={isOutlined}
			underlayColor={underlayColor}
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
	underlayColor: PropTypes.string,
}

export default ActionButton

