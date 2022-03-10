import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import ResetScreen from './index'

const ResetScreenWrapper = (props) => {
	const { navigation, theme } = props
	const { t } = useTranslation()
	const [step, setStep] = useState(1)

	const translations = {
		appName: t('app_name'),
		appSlogan: t('app_slogan'),
		title: t('reset_screen_title'),
		subtitle: t('reset_screen_subtitle'),
		submitButtonLabel: t('reset_screen_submit_button'),
		emailFieldPlaceholder: t('reset_screen_email_field_placeholder'),
		codeFieldPlaceholder: t('reset_screen_code_field_placeholder'),
		passwordFieldPlaceholder: t('reset_screen_new_password_field_placeholder'),
		confirmPasswordFieldPlaceholder: t('reset_screen_confirm_password_field_placeholder'),
		submitNewPasswordButtonLabel: t('reset_screen_submit_new_password_button_label'),
	}	

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
			translations={translations}
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