import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const BasicHeader = (props) => {
	const { style, color, colorInverted, onButtonPress, title, onDotPress } = props

	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.Content>
				<SC.Button
					onPress={onButtonPress}
					color={color}
					underlayColor={color}
				>
					<SC.ChevronLeft name="chevron-left" size={24} color={colorInverted} />
				</SC.Button>
				<SC.Title
					color={color}
				>
					{title}
				</SC.Title>
			</SC.Content>
			<SC.Content>
				<SC.MenuIcon
					onPress={onDotPress}
					name="dots-three-vertical"
					size={24}
					color={color}
				/>
			</SC.Content>
		</SC.Container>
	)
}

BasicHeader.propTypes = {
	onButtonPress: PropTypes.func,
	color: PropTypes.string,
	colorInverted: PropTypes.string,
	title: PropTypes.string,
	style: PropTypes.array,
	onDotPress: PropTypes.func,
}

export default BasicHeader