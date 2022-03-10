import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { LOGIN_ERROR, POST_LOGIN } from '../../../redux/actions/user'
import { validateEmail } from '../../../helpers/stringHelpers'

import LoginScreen from './index'

const LoginScreenWrapper = (props) => {
	const { navigation, onSubmit, isPending, error, resetError, theme } = props
	const { t } = useTranslation()

	const translations = {
		appName: t('app_name'),
		appSlogan: t('app_slogan'),
		title: t('login_screen_title'),
		subtitle: t('login_screen_subtitle'),
		submitButtonLabel: t('login_screen_submit_button'),
		forgotPasswordButtonLabel: t('login_screen_forgot_password_button_label'),
		forgotPasswordButtonAction: t('login_screen_forgot_password_button_action'),
		emailFieldPlaceholder: t('login_screen_email_field_placeholder'),
		passwordFieldPlaceholder: t('login_screen_password_field_placeholder'),
		registerButtonLabel: t('login_screen_register_button_label')
	}

	const handleSubmit = (values) => {
		if (!isPending && validateEmail(values.email)) {
			onSubmit({
				email: values.email,
				password: values.password,
			})
		}
	}

	useEffect(() => {
		resetError()
	}, [resetError])

	if (error) {
		setTimeout(() => {
			resetError()
		}, 5000)
	}

	return (
		<LoginScreen
			navigation={navigation}
			isPending={isPending}
			error={error}
			resetError={resetError}
			theme={theme}
			onSubmit={handleSubmit}
			translations={translations}
		/>
	)
}

LoginScreenWrapper.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
	onSubmit: PropTypes.func.isRequired,
	isPending: PropTypes.bool.isRequired,
	theme: PropTypes.object,
	error: PropTypes.string,
	resetError: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	isPending: state.userReducer.loading,
	error: state.userReducer.error,
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (input) => dispatch({ type: POST_LOGIN, payload: input }),
	resetError: () => dispatch({ type: LOGIN_ERROR, payload: '' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenWrapper)

