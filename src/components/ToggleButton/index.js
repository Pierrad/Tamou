import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ToggleButton = (props) => {
	const { style, text, isSelected, onPress, backgroundColor, backgroundSelectedColor, textColor } = props

	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.Button
				onPress={onPress}
				backgroundColor={backgroundColor}
				backgroundSelectedColor={backgroundSelectedColor}
				isSelected={isSelected}
				underlayColor={backgroundSelectedColor}
			>
				<SC.Text
					isSelected={isSelected}
					textColor={textColor}
				>
					{text}
				</SC.Text>
			</SC.Button>
		</SC.Container>
	)
}

ToggleButton.propTypes = {
	style: PropTypes.array,
	text: PropTypes.string,
	isSelected: PropTypes.bool,
	onPress: PropTypes.func.isRequired,
	backgroundColor: PropTypes.string,
	backgroundSelectedColor: PropTypes.string,
	textColor: PropTypes.string,
}

export default ToggleButton