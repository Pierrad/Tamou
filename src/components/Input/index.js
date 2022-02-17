import React from 'react'
import PropTypes from 'prop-types'


import * as SC from './styled'

const Input = ({ onChange, value, placeholder, type, isPassword, underlineColor }) => ( 
	<SC.Container >
		<SC.Input onChangeText = { onChange } value = { value } placeholder = {placeholder} keyboardType = {type} secureTextEntry = {isPassword} uunderlineColorAndroid = {underlineColor}/> 
	</SC.Container >

)

Input.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	isPassword: PropTypes.bool,
	underlineColor: PropTypes.string,
}

export default Input