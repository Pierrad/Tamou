import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ResetScreen from './index'

const ResetScreenWrapper = (props) => {
	const { navigation, theme } = props
	const [step, setStep] = useState(1)

	const onSubmit = (values) => {
		if (step === 1 && values.email) {
			setStep(step + 1)
			return
		}
		if (step === 2) {
			navigation.navigate('Login')
		}
	}

	return (
		<ResetScreen
			navigation={navigation}
			theme={theme}
			step={step}
			onSubmit={onSubmit}
		/>
	)
}

ResetScreenWrapper.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	theme: PropTypes.object,
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ResetScreenWrapper)