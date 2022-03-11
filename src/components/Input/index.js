import React from 'react'
import PropTypes from 'prop-types'

import { validateEmail, validatePassword } from '../../helpers/stringHelpers'

import * as SC from './styled'

const Input = ({ style, onChange, value, placeholder, type, isPassword, isPasswordViewable, setIsPasswordViewable, label }) => {

	return (
		<SC.Container style={style ? style[0] : 0}>
			{label && <SC.Label>{label}</SC.Label>}
			<SC.Input
				onChangeText={onChange}
				value={value}
				placeholder={placeholder}
				keyboardType={type}
				secureTextEntry={isPassword && !isPasswordViewable}
				autoCorrect={false}
				autoCapitalize='none'
				isEmailValid={type === 'email-address' && validateEmail(value)}
				isPassword={isPassword}
				isPasswordValid={isPassword && validatePassword(value)}
				placeholderTextColor='#898989'
			/>
			{isPassword && (
				<SC.Icon
					name={isPasswordViewable ? 'eye-slash' : 'eye'}
					size={20}
					color="#000"
					onPress={setIsPasswordViewable}
				/>
			)}
		</SC.Container >
	)
}

Input.propTypes = {
	style: PropTypes.array,
	onChange: PropTypes.func,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	isPassword: PropTypes.bool,
	isPasswordViewable: PropTypes.bool,
	setIsPasswordViewable: PropTypes.func,
	label: PropTypes.string,
}

export default Input