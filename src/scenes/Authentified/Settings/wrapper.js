import React, { useMemo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { POST_DELETE_ACCOUNT, POST_LOGOUT } from '../../../redux/actions/user'

import SettingsScreen from './index'

const SettingsScreenWrapper = (props) => {
	const { navigation, theme, onDeleteAccount, onLogout } = props
	const { t, i18n } = useTranslation()
	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)
	const [isModalVisible, setIsModalVisible] = useState(false)

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.goBack(),
		color: theme.backgroundInverted,
		colorInverted: theme.background,
		title: t('settings_screen_title'),
	}), [navigation, t, theme.background, theme.backgroundInverted])

	const translations = {
		language: t('settings_screen_language'),
		french: t('settings_screen_language_french'),
		english: t('settings_screen_language_english'),
		deleteCTA: t('settings_screen_delete_cta'),
		deleteConfirmation: t('settings_screen_delete_confirmation'),
		logout: t('settings_screen_logout'),
	}

	const handleLanguagePress = useCallback((value) => {
		setSelectedLanguage(value)
		i18n.changeLanguage(value)
	}, [i18n])

	const handleModalVisibility = (value) => {
		setIsModalVisible(value)
	}

	const handleDeleteAccount = useCallback(() => {
		onDeleteAccount()
	}, [onDeleteAccount])

	const handleLogout = useCallback(() => {
		onLogout()
	}, [onLogout])

	return (
		<SettingsScreen
			theme={theme}
			headerData={headerData}
			translations={translations}
			onLanguageChange={handleLanguagePress}
			selectedLanguage={selectedLanguage}
			onDeleteAccount={handleDeleteAccount}
			isModalVisible={isModalVisible}
			onChangeModalVisibility={handleModalVisibility}
			onLogout={handleLogout}
		/>
	)
}

SettingsScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	onDeleteAccount: PropTypes.func,
	onLogout: PropTypes.func,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = (dispatch) => ({
	onDeleteAccount: () => dispatch({ type: POST_DELETE_ACCOUNT }),
	onLogout: () => dispatch({ type: POST_LOGOUT }),
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreenWrapper)

