import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const GenderPicker = (props) => {
	const { style, onPickerPress, onArrowPress, value }  = props

	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.Title>Je suis...</SC.Title>
			<SC.Pickers>
				<SC.Picker
					onPress={() => onPickerPress('female')}
					isSelected={value === 'female'}
				>
					<SC.Image source={require('../../assets/images/femme.png')} />
				</SC.Picker>
				<SC.Picker
					onPress={() => onPickerPress('male')}
					isSelected={value === 'male'}
				>
					<SC.Image source={require('../../assets/images/homme.png')} />
				</SC.Picker>
			</SC.Pickers>
			<SC.Button
				onPress={onArrowPress}
				underlayColor='#fff'
			>
				<SC.Icon name="arrowright" size={30} color="#000" />
			</SC.Button> 
		</SC.Container>
	)
}

GenderPicker.propTypes = {
	style: PropTypes.array,
	onPickerPress: PropTypes.func,
	onArrowPress: PropTypes.func,
	value: PropTypes.string,
}

export default GenderPicker