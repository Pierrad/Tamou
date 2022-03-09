import React from 'react'
import PropTypes from 'prop-types'

import DashboardScreen from './index'
import { connect } from 'react-redux'

const DashboardScreenWrapper = (props) => {
	const { theme, navigation, user } = props

	return (
		<DashboardScreen 
			navigation={navigation}
			theme={theme}
			user={user}
		/>
	)
}

DashboardScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	user: PropTypes.shape({
		username: PropTypes.string.isRequired,
	}),
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreenWrapper)

