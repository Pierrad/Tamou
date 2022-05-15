import React, { useCallback, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { useTranslation } from 'react-i18next'

import { imageTranslation } from '../../../helpers/game'

import GameSearch from './index'

const GameSearchWrapper = props => {
	const { theme, navigation, user } = props
	const { t } = useTranslation()
	const [searchValue, setSearchValue] = useState('')
	const [games, setGames] = useState([])
	const [selectedGame, setSelectedGame] = useState()
	const userGames = useMemo(() => user.gameSection.games ?? [], [user])

	const translations = {
		subtitle: t('game_search_subtitle'),
		cta: t('game_search_cta_label'),
		searchPlaceholder: t('game_search_input_placeholder'),
	}

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.navigate('GameDashboard'),
		title: t('game_search_title'),
		leftIconName: 'chevron-left',
		onParametersPress: () => {console.log('')},
		theme: theme
	}), [navigation, t, theme])

	const onSelectGame = useCallback((game) => {
		setSelectedGame(game)
	}, [])

	const initialGames = useMemo(() => [
		{
			id: 0,
			minName: 'LOL',
			name: 'League of Legends',
			image: imageTranslation['LOL'],
			isInSelectMode: true,
			onPress: () => onSelectGame(0),
			isAlreadyAdded: userGames.filter((game) => game.game === 'LOL').length > 0,
		},
		{
			id: 1,
			minName: 'VALORANT',
			name: 'Valorant',
			image: imageTranslation['VALORANT'],
			isInSelectMode: true,
			onPress: () => onSelectGame(1),
			isAlreadyAdded: userGames.filter((game) => game.game === 'VALORANT').length > 0,
		},
		{
			id: 2,
			minName: 'MINECRAFT',
			name: 'Minecraft',
			image: imageTranslation['MINECRAFT'],
			isInSelectMode: true,
			onPress: () => onSelectGame(2),
			isAlreadyAdded: userGames.filter((game) => game.game === 'MINECRAFT').length > 0,
		},
		{
			id: 3,
			minName: 'FORTNITE',
			name: 'Fortnite',
			image: imageTranslation['FORTNITE'],
			isInSelectMode: true,
			onPress: () => onSelectGame(3),
			isAlreadyAdded: userGames.filter((game) => game.game === 'FORTNITE').length > 0,
		},
		{
			id: 4,
			minName: 'COD',
			name: 'Call of Duty',
			image: imageTranslation['COD'],
			isInSelectMode: true,
			onPress: () => onSelectGame(4),
			isAlreadyAdded: userGames.filter((game) => game.name === 'COD').length > 0,
		},
		{
			id: 5,
			minName: 'WOW',
			name: 'World of Warcraft',
			image: imageTranslation['WOW'],
			isInSelectMode: true,
			onPress: () => onSelectGame(5),
			isAlreadyAdded: userGames.filter((game) => game.game === 'WOW').length > 0,
		}
	], [onSelectGame, userGames])

	useEffect(() => {
		setGames(initialGames)
	}, [initialGames])

	const onSearchInput = (value) => {
		setSearchValue(value)
		const matches = initialGames.filter(game => game.name.includes(value))
		setGames(matches)
	}

	const onSubmit = () => {
		if (selectedGame) {
			navigation.navigate('GameSurvey', { game: initialGames.filter((game) => game.id === selectedGame)[0].minName })
		}
	}

	return (
		<GameSearch
			headerData={headerData}
			translations={translations}
			theme={theme}
			searchValue={searchValue}
			onSearchInput={onSearchInput}
			games={games}
			selectedGame={selectedGame}
			onSubmit={onSubmit}
		/>
	)
}

GameSearchWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	user: PropTypes.object,
}

const mapStateToProps = state => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(GameSearchWrapper)
