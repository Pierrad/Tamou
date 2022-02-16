import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'



const LoginScreen = ({navigation}) => (
	<SC.Container>
		<SC.Text>Screen: Login</SC.Text>
		<SC.Contain>
			<SC.Title>Welcome Back</SC.Title>
			<SC.Text>Sign in to continue</SC.Text>
			<Input 
				placeholder= "UserName"></Input>
			<Input 
				placeholder= "Password" isPassword={true}></Input>
			<ActionButton  
				primary={true} 
				title="Sign In" 
				onPress={()=> navigation.navigate('Home')}
			/>
			<SC.Text>Did you forget your password?</SC.Text>
			
			<ActionButton
				isOutlined={true}
				title="Sign Up" 
				onPress={()=> navigation.navigate('Home')} 
			/>
		</SC.Contain>
	</SC.Container>
)

LoginScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
}

export default LoginScreen