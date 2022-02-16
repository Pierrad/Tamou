import React from 'react'
import {Button} from 'react-native'
import PropTypes from 'prop-types'

import * as SC from './styled'

const LoginScreen = ({navigation}) => (
	<SC.Container>
		<SC.Text>Screen: Login</SC.Text>
		<Button
			title="Go to Home"
			onPress={() => navigation.navigate('Home')}
		/>
	</SC.Container>
)

LoginScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
}

export default LoginScreen