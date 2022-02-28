import React from 'react'
import { connect } from 'react-redux'

import SurveyStepperScreen from './index'

const SurveyStepperScreenWrapper = () => {

	return (
		<SurveyStepperScreen />
	)
}

SurveyStepperScreenWrapper.propTypes = {}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyStepperScreenWrapper)

