import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThemeProvider } from 'styled-components/native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import { CHECK_EXISTING_SESSION } from '../../redux/actions/user'
import { navigationRef } from '../../navigation/RootNavigation'

import { lightTheme } from '../../themes/theme'

import HomeScreen from '../home'
import LoginScreenWrapper from '../login/wrapper'
import RegisterScreenWrapper from '../register/wrapper'
import ResetScreenWrapper from '../reset/wrapper'

import DashboardScreenWrapper from '../dashboard/wrapper'
import ProfilScreenWrapper from '../profil/wrapper'
import NotificationScreenWrapper from '../notification/wrapper'
import SurveyStepperScreenWrapper from '../surveyStepper/wrapper'

import LoveHomeScreen from '../love/home'
import LoveSurveyScreenWrapper from '../love/surveyStepper/wrapper'
import LoveDashboardScreenWrapper from '../love/dashboard/wrapper'
import LoveSwipeScreenWrapper from '../love/swipe/wrapper'

const Stack = createNativeStackNavigator()

const Layout = ({ theme, init }) => {
	useEffect(() => {
		init()
	}, [init])

	return (
		<ThemeProvider theme={theme || lightTheme}>
			<NavigationContainer ref={navigationRef}>
				<Stack.Navigator initialRouteName="Home">
					{/* Unauthentified screens */}
					<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
					<Stack.Screen name="Login" component={LoginScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Register" component={RegisterScreenWrapper} options={{ headerShown: false }} />
					<Stack.Screen name="Reset" component={ResetScreenWrapper} options={{ headerShown: false }} />
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
	init: () => dispatch({ type: CHECK_EXISTING_SESSION })
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

