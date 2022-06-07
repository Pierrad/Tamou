import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { CHECK_EXISTING_SESSION, RESET_PUBLIC_PROFILE } from '../../../redux/actions/user'
import { imageTranslation } from '../../../helpers/game'

import GameDashboardScreen from './index'

const GameDashboardScreenWrapper = (props) => {
	const { theme, navigation, user, reloadUser, resetPublicProfile } = props
	const { t } = useTranslation()

	useEffect(() => {
		const listener = navigation.addListener('focus', () => {
			reloadUser()
			resetPublicProfile()
		})

		return listener
	}, [navigation, reloadUser, resetPublicProfile])

	const translations = {
		title: t('game_dashboard_title'),
		subtitle: t('game_dashboard_subtitle'),
		cta: t('game_dashboard_cta_swipe'),
	}

	const gamesCard = user.gameSection.games.map((game) => {
		return {
			game: game.game,
			image: imageTranslation[game.game],
			onPress: () => navigation.navigate('GamePartner', { game: game.game }),
		}
	})

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.navigate('Dashboard'),
		title: translations.title,
		leftIconName: 'chevron-left',
		theme: theme
	}), [navigation, theme, translations.title])

	return (
		<GameDashboardScreen
			theme={theme}
			headerData={headerData}
			translations={translations}
			navigation={navigation}
			cards={gamesCard}
		/>
	)
}

GameDashboardScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
		addListener: PropTypes.func.isRequired
	}).isRequired,
	user: PropTypes.object,
	reloadUser: PropTypes.func,
	resetPublicProfile: PropTypes.func,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = (dispatch) => ({
	reloadUser: () => dispatch({ type: CHECK_EXISTING_SESSION }),
	resetPublicProfile: () => dispatch({ type: RESET_PUBLIC_PROFILE }),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameDashboardScreenWrapper)

