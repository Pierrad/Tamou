import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { CHECK_EXISTING_SESSION } from '../../../redux/actions/user'

import DashboardScreen from './index'

const DashboardScreenWrapper = (props) => {
	const { theme, navigation, user, reloadUser } = props
	const { t } = useTranslation()

	useEffect(() => {
		const listener = navigation.addListener('focus', () => {
			reloadUser()
		})

		return listener
	}, [navigation, reloadUser])

	const translations = {
		hello: t('dashboard_screen_hello', { name: user.username }),
		categories: t('dashboard_screen_personal_categories'),
		loveCategoryTitle: t('category_love'),
		gameCategoryTitle: t('category_game'),
		sportCategoryTitle: t('category_sport'),
		cookingCategoryTitle: t('category_cook'),
		studyCategoryTitle: t('category_study'),
		petCategoryTitle: t('category_pet'),
		addCategory: t('dashboard_screen_add_category'),
	}

	const handleAddCategoryPress = () => {
		navigation.navigate('SurveyStepper', { step: 2 })
	}

	const handleNavigationToGame = () => {
		if (user.gameSection.games.length === 0) {
			navigation.navigate('GameSurvey')
		} else {
			navigation.navigate('GameDashboard')
		}
	}

	const handleNavigationToLove = () => {
		if (user.loveSection.hasAlreadySetPreferences) {
			navigation.navigate('LoveDashboard')
		} else {
			navigation.navigate('LoveSurvey')
		}
	}

	const handleNavigationToChat = () => {
		navigation.navigate('Chat')
	}

	return (
		<DashboardScreen 
			navigation={navigation}
			theme={theme}
			translations={translations}
			avatar={user.avatar}
			hasGameSection={user.gameSection.requested}
			hasLoveSection={user.loveSection.requested}
			onAddCategory={handleAddCategoryPress}
			numberOfNotifications={user.notifications.length}
			handleNavigationToGame={handleNavigationToGame}
			handleNavigationToChat={handleNavigationToChat}
			handleNavigationToLove={handleNavigationToLove}
		/>
	)
}

DashboardScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func,
		goBack: PropTypes.func,
		addListener: PropTypes.func
	}).isRequired,
	user: PropTypes.shape({
		username: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		gameSection: PropTypes.shape({
			games: PropTypes.array,
			requested: PropTypes.bool,
		}),
		loveSection: PropTypes.shape({
			matchs: PropTypes.array,
			requested: PropTypes.bool,
			hasAlreadySetPreferences: PropTypes.bool,
		}),
		notifications: PropTypes.array,
	}),
	reloadUser: PropTypes.func,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = (dispatch) => ({
	reloadUser: () => dispatch({ type: CHECK_EXISTING_SESSION }),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreenWrapper)

