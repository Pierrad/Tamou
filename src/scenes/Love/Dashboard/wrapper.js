import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import LoveDashboardScreen from './index'

const LoveDashboardScreenWrapper = (props) => {
	const { theme, navigation } = props
	const { t } = useTranslation()

	const translations = {
		title: t('love_dashboard_title'),
		subtitle: t('love_dashboard_subtitle'),
		cta: t('love_dashboard_cta_swipe'),
	}

	const handleButtonPress = () => {
		navigation.navigate('LoveSwipe')
	}

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.navigate('Dashboard'),
		title: translations.title,
		leftIconName: 'chevron-left',
		// onParametersPress: () => {console.log('')},
		theme: theme
	}), [navigation, theme, translations.title])

	return (
		<LoveDashboardScreen
			theme={theme}
			headerData={headerData}
			translations={translations}
			onButtonPress={handleButtonPress}
		/>
	)
}

LoveDashboardScreenWrapper.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoveDashboardScreenWrapper)

