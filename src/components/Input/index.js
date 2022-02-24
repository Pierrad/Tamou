import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const Input = ({ onChange, value, placeholder, type, isPassword, isPasswordViewable, setIsPasswordViewable }) => ( 
	<SC.Container >
		<SC.Input
			onChangeText={onChange}
			value={value}
			placeholder={placeholder}
			keyboardType={type}
			secureTextEntry={isPassword && !isPasswordViewable}
			autoCorrect={false}
			autoCapitalize='none'
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

Input.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	isPassword: PropTypes.bool,
	isPasswordViewable: PropTypes.bool,
	setIsPasswordViewable: PropTypes.func,
}

export default Input