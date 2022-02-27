import React from 'react'
import PropTypes from 'prop-types'


import * as SC from './styled'

const Link = ({ title, onPress, primary, secondary, isOutlined, underlayColor }) => ( 
	<SC.Container>
		<SC.Link
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
		</SC.Link>
	</SC.Container>
)

Link.propTypes = {
	title: PropTypes.string,
	onPress: PropTypes.func,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	isOutlined: PropTypes.bool,
	underlayColor: PropTypes.string,
}

export default Link