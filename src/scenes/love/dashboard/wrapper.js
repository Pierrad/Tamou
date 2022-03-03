import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LoveDashboardScreen from './index'

const LoveDashboardScreenWrapper = (props) => {
	const { theme, navigation } = props
	return (
		<LoveDashboardScreen
			theme={theme}
			navigation={navigation}
		/>
	)
}

LoveDashboardScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(LoveDashboardScreenWrapper)

