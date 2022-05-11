import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { imageTranslation } from '../../../helpers/game'

import GameDashboardScreen from './index'

const GameDashboardScreenWrapper = (props) => {
	const { theme, navigation, user } = props
	const { t } = useTranslation()

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
		onParametersPress: () => {console.log('')},
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
	}).isRequired,
	user: PropTypes.object,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(GameDashboardScreenWrapper)

