import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThemeProvider } from 'styled-components/native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { CHECK_EXISTING_SESSION } from '../../redux/actions/user'
import { navigationRef } from '../../navigation/RootNavigation'
import { lightTheme } from '../../themes/theme'

import HomeScreen from '../Home'
import LoginScreenWrapper from '../Unauthentified/Login/wrapper'
import RegisterScreenWrapper from '../Unauthentified/Register/wrapper'
import ResetScreenWrapper from '../Unauthentified/Reset/wrapper'
import SplashScreen from '../Unauthentified/Splash'

import DashboardScreenWrapper from '../Authentified/Dashboard/wrapper'
import ProfilScreenWrapper from '../Authentified/Profil/wrapper'
import NotificationScreenWrapper from '../Authentified/Notification/wrapper'
import SurveyStepperScreenWrapper from '../Authentified/SurveyStepper/wrapper'

import LoveHomeScreen from '../Love/Home'
import LoveSurveyScreenWrapper from '../Love/SurveyStepper/wrapper'
import LoveDashboardScreenWrapper from '../Love/Dashboard/wrapper'
import LoveSwipeScreenWrapper from '../Love/Swipe/wrapper'

import GameHomeScreen from '../Game/Home'
import GameSurveyScreenWrapper from '../Game/SurveyStepper/wrapper'

import Error from '../../components/Error'

const Stack = createNativeStackNavigator()

const Layout = (props) => {
	const { theme, init, error, resetError } = props

	useEffect(() => {
		init()
	}, [init])

	useEffect(() => {
		resetError()
	}, [resetError])

	if (error) {
		setTimeout(() => {
			resetError()
		}, 5000)
	}

	return (
		<ThemeProvider theme={theme || lightTheme}>
			<NavigationContainer ref={navigationRef}>
				<Error error={error} />
				<Stack.Navigator initialRouteName="Home">
					{/* Unauthentified screens */}
					<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
					<Stack.Screen name="Login" component={LoginScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Register" component={RegisterScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Reset" component={ResetScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
					{/* Authentified screens */}
					<Stack.Screen name="Dashboard" component={DashboardScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Profil" component={ProfilScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Notification" component={NotificationScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="SurveyStepper" component={SurveyStepperScreenWrapper} options={{ headerShown: false }} />
					{/* Love screens */}
					<Stack.Screen name="LoveHome" component={LoveHomeScreen} options={{ headerShown: false }} />
					<Stack.Screen name="LoveSurvey" component={LoveSurveyScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="LoveDashboard" component={LoveDashboardScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="LoveSwipe" component={LoveSwipeScreenWrapper} options={{ headerShown: false }} />
					{/* Game screens */}
					<Stack.Screen name="GameHome" component={GameHomeScreen} options={{ headerShown: false }} />
					<Stack.Screen name="GameSurvey" component={GameSurveyScreenWrapper} options={{ headerShown: false }} />
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	theme: PropTypes.shape({
		mode: PropTypes.string,
	}),
	init: PropTypes.func,
	error: PropTypes.string,
	resetError: PropTypes.func,
}

const mapStateToProps = (state) => ({
	theme: state?.themeReducer?.theme,
	error: state?.appReducer?.error
})

const mapDispatchToProps = (dispatch) => ({
	init: () => dispatch({ type: CHECK_EXISTING_SESSION }),
	resetError: () => dispatch({ type: 'RESET_ERROR' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

