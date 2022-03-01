import React from 'react'
import {Button} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { darkTheme, lightTheme } from '../../themes/theme'


import * as SC from './styled'

const HomeScreen = ({ navigation, onSwitchTheme, theme }) => (
	<SC.Container>
		<SC.Text>Home Screen</SC.Text>
		<Button
			title="Go to Login"
			onPress={() => navigation.navigate('Login')}
		/>
		<Button
			title="Go to Dashboard"
			onPress={() => navigation.navigate('Dashboard')}
		/>
		<Button
			title="Go to register"
			onPress={() => navigation.navigate('Register')}
		/>
		<Button
			title="Go to reset"
			onPress={() => navigation.navigate('Reset')}
		/>
		<Button
			title="Go to SurveyStepper"
			onPress={() => navigation.navigate('SurveyStepper')}
		/>
		{theme && theme.mode === 'light' ? (
			<Button title="Switch to Dark Theme" onPress={() => onSwitchTheme(darkTheme)} />
		) : (
			<Button title="Switch to Light Theme" onPress={() => onSwitchTheme(lightTheme)} />
		)}
	</SC.Container>

)

HomeScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	onSwitchTheme: PropTypes.func.isRequired,
	theme: PropTypes.shape({
		mode: PropTypes.string.isRequired,
	})
}

const mapStateToProps = (state) => ({
	theme: state?.themeReducer?.theme
})

const mapDispatchToProps = (dispatch) => ({
	onSwitchTheme: (theme) => dispatch({ type: 'SWITCH_THEME', theme })
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


