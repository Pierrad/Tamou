import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThemeProvider } from 'styled-components/native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { lightTheme } from '../../themes/theme'

import HomeScreen from '../home'
import LoginScreen from '../login'

const Stack = createNativeStackNavigator()

const Layout = ({ theme }) => (
	<ThemeProvider theme={theme || lightTheme}>
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	</ThemeProvider>
)

Layout.propTypes = {
	theme: PropTypes.shape({
		mode: PropTypes.string,
	})
}

const mapStateToProps = (state) => ({
	theme: state?.themeReducer?.theme
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

