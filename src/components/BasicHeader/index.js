import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const BasicHeader = ({ className, color, onButtonPress, title }) => {
	console.log(title)

	return (
		<SC.Container style={className}>
			<SC.Content>
				<SC.Button
					onPress={onButtonPress}
					color={color}
				>
					<SC.ChevronLeft name="chevron-left" size={24} color={color} />
				</SC.Button>
				<SC.Title
					color={color}
				>
					{title}
				</SC.Title>
			</SC.Content>
		</SC.Container>
	)
}

BasicHeader.propTypes = {
	onButtonPress: PropTypes.func,
	color: PropTypes.string,
	title: PropTypes.string,
	className: PropTypes.string,
}

export default BasicHeader