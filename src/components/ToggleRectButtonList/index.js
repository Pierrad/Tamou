import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ToggleRectButtonList = (props) => {
	const { style, id, label, options, onPress, value, color } = props
	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.Label>{label}</SC.Label>
			<SC.Buttons>
				{options.map((toggle, i) => (
					<SC.ToggleButton
						key={i}
						text={toggle.label}
						borderColor={color}
						backgroundSelectedColor={color}
						onPress={() => onPress(id, toggle.value)}
						isSelected={value === toggle.value}
					/>
				))}
			</SC.Buttons>
		</SC.Container>
	)
}

ToggleRectButtonList.propTypes = {
	style: PropTypes.array,
	id: PropTypes.number,
	label: PropTypes.string,
	value: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.shape(SC.ToggleButton.PropTypes)),
	onPress: PropTypes.func,
	color: PropTypes.string,
}

export default ToggleRectButtonList