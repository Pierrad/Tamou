import React, { useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import SettingsScreen from './index'

const SettingsScreenWrapper = (props) => {
	const { navigation, theme } = props
	const { t, i18n } = useTranslation()

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.goBack(),
		color: theme.backgroundInverted,
		colorInverted: theme.background,
		title: t('settings_screen_title'),
	}), [navigation, t, theme.background, theme.backgroundInverted])

	const handleFrenchTranslationPress = useCallback(() => {
		i18n.changeLanguage('fr')
	}, [i18n])

	const handleEnglishTranslationPress = useCallback(() => {
		i18n.changeLanguage('en')
	}, [i18n])

	return (
		<SettingsScreen 
			headerData={headerData}
			onFrenchTranslationPress={handleFrenchTranslationPress}
			onEnglishTranslationPress={handleEnglishTranslationPress}
		/>
	)
}

SettingsScreenWrapper.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreenWrapper)

