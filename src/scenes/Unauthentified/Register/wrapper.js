import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import RegisterScreen from './index'
import { connect } from 'react-redux'
import { POST_REGISTER, REGISTER_ERROR } from '../../../redux/actions/user'
import { validateEmail, validatePassword } from '../../../helpers/stringHelpers'

const RegisterScreenWrapper = (props) => {
	const { navigation, onSubmit, isPending, error, resetError, theme } = props
	const { t } = useTranslation()

	const translations = {
		appName: t('app_name'),
		appSlogan: t('app_slogan'),
		title: t('login_screen_title'),
		subtitle: t('login_screen_subtitle'),
		submitButtonLabel: t('register_screen_submit_button'),
		pseudoFieldPlaceholder: t('register_screen_pseudo_field_placeholder'),
		emailFieldPlaceholder: t('register_screen_email_field_placeholder'),
		passwordFieldPlaceholder: t('register_screen_password_field_placeholder'),
		firstnameFieldPlaceholder: t('register_screen_firstname_field_placeholder'),
		lastnameFieldPlaceholder: t('register_screen_lastname_field_placeholder'),
		alreadyHaveAccountButtonLabel: t('register_screen_already_have_account_button_label'),
		alreadyHaveAccountButtonAction: t('register_screen_already_have_account_button_action')
	}

	const handleSubmit = (values) => {
		if (!isPending && validateEmail(values.email) && validatePassword(values.password)) {
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
		<RegisterScreen
			navigation={navigation}
			isPending={isPending}
			error={error}
			theme={theme}
			onSubmit={handleSubmit}
			translations={translations}
		/>
	)
}

RegisterScreenWrapper.propTypes = {
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
	onSubmit: (input) => dispatch({ type: POST_REGISTER, payload: input }),
	resetError: () => dispatch({ type: REGISTER_ERROR, payload: '' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreenWrapper)