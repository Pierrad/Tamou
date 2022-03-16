import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import ResetScreen from './index'
import { POST_REQUEST_PASSWORD_CHANGE, POST_RESET_PASSWORD } from '../../../redux/actions/user'
import { validatePassword } from '../../../helpers/stringHelpers'
import { SET_ERROR } from '../../../redux/actions/app'

const ResetScreenWrapper = (props) => {
	const { navigation, theme, step, requestPasswordChange, resetPassword, setError, loading } = props
	const { t } = useTranslation()

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
		if (step === 0 && values.email) {
			requestPasswordChange({
				email: values.email
			})
		}
		if (step === 1 && values.code && validatePassword(values.password) && (values.password === values.confirmPassword)) {
			resetPassword({
				code: values.code,
				password: values.password,
			})
		} else if (values.code === '') {
			setError(t('reset_screen_error_message'))
		} else if (values.password !== values.confirmPassword) {
			setError(t('reset_screen_error_message_password'))
		}
	}

	return (
		<ResetScreen
			navigation={navigation}
			theme={theme}
			step={step}
			onSubmit={onSubmit}
			translations={translations}
			isLoading={loading}
		/>
	)
}

ResetScreenWrapper.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func,
		goBack: PropTypes.func,
	}).isRequired,
	theme: PropTypes.object,
	step: PropTypes.number,
	requestPasswordChange: PropTypes.func,
	resetPassword: PropTypes.func,
	setError: PropTypes.func,
	loading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
	step: state.appReducer.step,
	loading: state.appReducer.loading,
})

const mapDispatchToProps = (dispatch) => ({
	requestPasswordChange: (input) => dispatch({ type: POST_REQUEST_PASSWORD_CHANGE, payload: input }),
	resetPassword: (input) => dispatch({ type: POST_RESET_PASSWORD, payload: input }),
	setError: (input) => dispatch({ type: SET_ERROR, payload: input })
})

export default connect(mapStateToProps, mapDispatchToProps)(ResetScreenWrapper)