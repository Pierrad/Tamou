import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import DashboardScreen from './index'

const DashboardScreenWrapper = (props) => {
	const { theme, navigation, user } = props
	const { t } = useTranslation()

	console.log(user)

	const translations = {
		hello: t('dashboard_screen_hello', { name: user.username }),
		categories: t('dashboard_screen_personal_categories'),
		loveCategoryTitle: t('category_love'),
		gameCategoryTitle: t('category_game'),
		sportCategoryTitle: t('category_sport'),
		cookingCategoryTitle: t('category_cook'),
		studyCategoryTitle: t('category_study'),
		petCategoryTitle: t('category_pet'),
	}

	return (
		<DashboardScreen 
			navigation={navigation}
			theme={theme}
			translations={translations}
			avatar={user.avatar}
			hasGameSection={user.gameSection.games.length > 0}
		/>
	)
}

DashboardScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	user: PropTypes.shape({
		username: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		gameSection: PropTypes.shape({
			games: PropTypes.array,
		}),
	}),
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreenWrapper)

