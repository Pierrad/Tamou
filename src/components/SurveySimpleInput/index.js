import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const SurveySimpleInput = (props) => {
	const { style, onArrowPress, title, placeholder, onInputChange, value } = props

	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.Title>{title}</SC.Title>
			<SC.Input
				placeholder={placeholder}
				onChangeText={onInputChange}
				value={value}
				placeholderTextColor='#898989'
				textAlign={'center'}
				keyboardType="numeric"
			/>
			<SC.Button
				onPress={onArrowPress}
				underlayColor='#fff'
			>
				<SC.Icon name="arrowright" size={30} color="#000" />
			</SC.Button> 
		</SC.Container>
	)
}

SurveySimpleInput.propTypes = {
	style: PropTypes.array,
	onArrowPress: PropTypes.func,
	title: PropTypes.string,
	placeholder: PropTypes.string,
	onInputChange: PropTypes.func,
	value: PropTypes.string
}

export default SurveySimpleInput