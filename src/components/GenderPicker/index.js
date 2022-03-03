import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const GenderPicker = props => {
	const {style, title, onPickerPress, onArrowPress, value} = props

	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.TitleWrapper>
				<SC.Title>{title}</SC.Title>
			</SC.TitleWrapper>
			<SC.Pickers>
				<SC.Picker
					onPress={() => onPickerPress('female')}
					isSelected={(typeof value == 'string' && value === 'female') || (Array.isArray(value) && value.includes('female')) }>
					<SC.Image source={require('../../assets/images/femme.png')} />
				</SC.Picker>
				<SC.Picker
					onPress={() => onPickerPress('male')}
					isSelected={(typeof value == 'string' && value === 'male') || (Array.isArray(value) && value.includes('male')) }>
					<SC.Image source={require('../../assets/images/homme.png')} />
				</SC.Picker>
			</SC.Pickers>
			<SC.Button onPress={onArrowPress} underlayColor="#fff">
				<SC.Icon name="arrowright" size={30} color="#000" />
			</SC.Button>
		</SC.Container>
	)
}

GenderPicker.propTypes = {
	style: PropTypes.array,
	title: PropTypes.string,
	onPickerPress: PropTypes.func,
	onArrowPress: PropTypes.func,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export default GenderPicker
