import React from 'react'
import PropTypes from 'prop-types'


import * as SC from './styled'

const ActionButton = ({ className, title, children, onPress, primary, secondary, isOutlined, underlayColor }) => {
	console.log(className)
	return (
		<SC.Container style={className}>
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
					{children}
				</SC.Text>
			</SC.Button>
		</SC.Container>
	)
}

ActionButton.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.node,
	onPress: PropTypes.func,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	isOutlined: PropTypes.bool,
	underlayColor: PropTypes.string,
}

export default ActionButton


