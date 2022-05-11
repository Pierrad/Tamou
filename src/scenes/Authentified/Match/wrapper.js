import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { categoryIcons } from '../../../helpers/icon'

import MatchScreen from './index'

const MatchScreenWrapper = (props) => {
	const { theme, navigation, route } = props
	const { category } = route.params
	const { t } = useTranslation()
	const user1= 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png'
	const user2= 'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png'

	const translations = {
		title: t('love_match_title'),
		continueSwipeButtonAction: t('love_screen_continue_swipe_button_label'),
		continueSwipeAccountButtonLabel: t('love_screen_continue_swipe_button_action')
	}

	const handleButtonPress = () => {
		navigation.navigate(`${category}Swipe`)
	}

	const icon = categoryIcons[category]

	return (
		<MatchScreen
			theme={theme}
			color={theme[category]}
			icon={icon}
			translations={translations}
			onButtonPress={handleButtonPress}
			user1={user1}
			user2={user2}
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
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreenWrapper)

