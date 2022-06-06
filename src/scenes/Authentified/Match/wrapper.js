import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { capitalizeFirstLetter } from '../../../helpers/string'
import { categoryIcons } from '../../../helpers/icon'

import MatchScreen from './index'

const MatchScreenWrapper = (props) => {
	const { theme, navigation, route, user } = props
	const { category, match } = route.params
	const { t } = useTranslation()

	const translations = {
		title: t('love_match_title'),
		continueSwipeButtonAction: t('love_screen_continue_swipe_button_label'),
		continueSwipeAccountButtonLabel: t('love_screen_continue_swipe_button_action')
	}

	const handleButtonPress = () => {
		navigation.navigate(`${capitalizeFirstLetter(category)}Swipe`)
	}

	const icon = categoryIcons[category]

	return (
		<MatchScreen
			theme={theme}
			color={theme[category]}
			icon={icon}
			translations={translations}
			onButtonPress={handleButtonPress}
			user={user}
			match={match}
		/>
	)
}

MatchScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	route: PropTypes.object,
	user: PropTypes.object,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreenWrapper)

