import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ActionButton = (props) => {
	const { style, title, children, onPress, primary, secondary, isOutlined, underlayColor, textColor, isPending } = props

	return (
		<SC.Container 
			style={style ? {...style[0], ...SC.style.container} : SC.style.container}
			primary={primary}
			secondary={secondary}
			isOutlined={isOutlined}
		>
			<SC.Button
				onPress={onPress}
				underlayColor={underlayColor}
				primary={primary}
				secondary={secondary}
				isOutlined={isOutlined}
			>
				{isPending ?
					(
						<SC.Spinner color="#FFF" />
					)
					: (
						<SC.Text
							primary={primary}
							isOutlined={isOutlined}
							secondary={secondary}
							textColor={textColor}
						>
							{title}
							{children}
						</SC.Text>
					)}
				
			</SC.Button>
		</SC.Container>
	)
}

ActionButton.propTypes = {
	style: PropTypes.array,
	title: PropTypes.string,
	children: PropTypes.node,
	onPress: PropTypes.func,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	isOutlined: PropTypes.bool,
	underlayColor: PropTypes.string,
	textColor: PropTypes.string,
	isPending: PropTypes.bool,
}

export default ActionButton


