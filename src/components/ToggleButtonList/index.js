import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ToggleButtonList = (props) => {
	const { style, title, onArrowPress, toggles, onPress, values } = props
	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.TitleWrapper>
				<SC.Title>{title}</SC.Title>
			</SC.TitleWrapper>
			<SC.Buttons>
				{toggles.map((toggle, index) => (
					<SC.ToggleButton
						key={index}
						text={toggle.text}
						backgroundSelectedColor={toggle.backgroundSelectedColor}
						onPress={() => onPress(toggle.value)}
						isSelected={values.includes(toggle.value)}
					/>
				))}
			</SC.Buttons>
			<SC.Button
				onPress={onArrowPress}
				underlayColor='#fff'
			>
				<SC.Icon name="arrowright" size={30} color="#000" />
			</SC.Button> 
		</SC.Container>
	)
}

ToggleButtonList.propTypes = {
	style: PropTypes.array,
	title: PropTypes.string,
	onArrowPress: PropTypes.func,
	toggles: PropTypes.arrayOf(PropTypes.shape(SC.ToggleButton.PropTypes)),
	onPress: PropTypes.func,
	values: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export default ToggleButtonList