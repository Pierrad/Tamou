import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThemeProvider } from 'styled-components/native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { navigationRef } from '../../navigation/RootNavigation'

import { lightTheme } from '../../themes/theme'

import HomeScreen from '../home'
import LoginScreen from '../login'
import DashboardScreen from '../dashboard'
import RegisterScreen from '../register'
import ResetScreen from '../reset'
import ProfilScreenWrapper from '../profil/wrapper'

const Stack = createNativeStackNavigator()

const Layout = ({ theme, init }) => {
	useEffect(() => {
		init()
	}, [])

	return (
		<ThemeProvider theme={theme || lightTheme}>
			<NavigationContainer ref={navigationRef}>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
					<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
					<Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
					<Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
					<Stack.Screen name="Reset" component={ResetScreen} options={{ headerShown: false }} />
					<Stack.Screen name="Profil" component={ProfilScreenWrapper} options={{ headerShown: false }} />
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	theme: PropTypes.shape({
		mode: PropTypes.string,
	}),
	init: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	theme: state?.themeReducer?.theme
})

const mapDispatchToProps = (dispatch) => ({
	init: () => dispatch({ type: 'CHECK_EXISTING_SESSION' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

