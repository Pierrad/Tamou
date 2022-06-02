import React from 'react'
import PropTypes from 'prop-types'

import DismissKeyboardHOC from '../../helpers/useDismissKeyboardView'

import * as SC from './styled'

const TagLineInput = (props) => {
	const { style, onArrowPress, title, value, onValueChange } = props

	const handleArrowPress = () => {
		if (value) {
			onArrowPress()
		}
	}

	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.Title>{title}</SC.Title>
			<DismissKeyboardHOC flex={5}>
				<SC.Input
					placeholder="Une phrase qui décrit ton profil"
					onChangeText={onValueChange}
					value={value}
					placeholderTextColor='#898989'
					multiline
				/>
					
			</DismissKeyboardHOC>
			<SC.Button
				onPress={handleArrowPress}
				underlayColor='#fff'
			>
				<SC.Icon name="arrowright" size={30} color="#000" />
			</SC.Button> 
		</SC.Container>
	)
}

TagLineInput.propTypes = {
	style: PropTypes.array,
	onArrowPress: PropTypes.func,
	title: PropTypes.string,
	onValueChange: PropTypes.func,
	value: PropTypes.string,
}

export default TagLineInput