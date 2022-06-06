import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import RegisterScreen from './index'
import { POST_REGISTER } from '../../../redux/actions/user'
import { validateEmail, validatePassword } from '../../../helpers/string'

const RegisterScreenWrapper = (props) => {
	const { navigation, onSubmit, isPending, theme } = props
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
		birthdayFieldPlaceholder: t('register_screen_birthday_field_placeholder'),
		alreadyHaveAccountButtonLabel: t('register_screen_already_have_account_button_label'),
		alreadyHaveAccountButtonAction: t('register_screen_already_have_account_button_action')
	}

	const handleSubmit = (values) => {
		if (!isPending && values.username && validateEmail(values.email) && validatePassword(values.password) && values.firstname && values.lastname) {
			onSubmit({
				username: values.username,
				email: values.email,
				password: values.password,
				firstname: values.firstname,
				lastname: values.lastname,
				birthday: values.birthday
			})
		}
	}
	return (
		<RegisterScreen
			navigation={navigation}
			isPending={isPending}
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
}

const mapStateToProps = (state) => ({
	isPending: state.userReducer.loading,
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (input) => dispatch({ type: POST_REGISTER, payload: input })
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreenWrapper)