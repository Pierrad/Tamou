import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import LoveMatchScreen from './index'

const LoveMatchScreenWrapper = (props) => {
	const { theme, navigation } = props
	const { t } = useTranslation()

	const translations = {
		title: t('love_match_title'),
		continueSwipeButtonAction: t('love_screen_continue_swipe_button_label'),
		continueSwipeAccountButtonLabel: t('love_screen_continue_swipe_button_action')
	}

	const handleButtonPress = () => {
		navigation.navigate('../Swipe')
	}
    

	return (
		<LoveMatchScreen
			theme={theme}
			translations={translations}
			onButtonPress={handleButtonPress}
		/>
	)
}

LoveMatchScreenWrapper.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoveMatchScreenWrapper)

