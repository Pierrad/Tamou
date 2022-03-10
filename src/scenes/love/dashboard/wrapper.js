import React from 'react'
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

	return (
		<LoveDashboardScreen
			theme={theme}
			navigation={navigation}
			translations={translations}
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

