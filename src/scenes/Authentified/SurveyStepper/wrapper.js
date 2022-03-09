import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SurveyStepperScreen from './index'

const SurveyStepperScreenWrapper = (props) => {
	const { theme, navigation } = props 

	return (
		<SurveyStepperScreen
			theme={theme}
			navigation={navigation}
		/>
	)
}

SurveyStepperScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyStepperScreenWrapper)

