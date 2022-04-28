import React, { useCallback, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { useTranslation } from 'react-i18next'

import GameSearch from './index'

const GameSearchWrapper = props => {
	const { theme, navigation } = props
	const { t } = useTranslation()
	const [searchValue, setSearchValue] = useState('')
	const [games, setGames] = useState([])
	const [selectedGames, setSelectedGames] = useState([])

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
		const newSelectedGames = [...selectedGames]
		const index = newSelectedGames.findIndex(g => g === initialGames[game].id)
		if (index === -1) {
			newSelectedGames.push(initialGames[game].id)
		} else {
			newSelectedGames.splice(index, 1)
		}
		setSelectedGames(newSelectedGames)
	}, [initialGames, selectedGames])

	const initialGames = useMemo(() => [
		{
			id: 0,
			name: 'League of Legends',
			image: 'https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg',
			isInSelectMode: true,
			onPress: () => onSelectGame(0),
		},
		{
			id: 1,
			name: 'Valorant',
			image: 'https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png',
			isInSelectMode: true,
			onPress: () => onSelectGame(1),
		},
		{
			id: 2,
			name: 'Minecraft',
			image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg',
			isInSelectMode: true,
			onPress: () => onSelectGame(2),
		},
		{
			id: 3,
			name: 'Fortnite',
			image: 'https://cdn2.unrealengine.com/7up-v2-3840x2160-e11fc91a84d6.jpg',
			isInSelectMode: true,
			onPress: () => onSelectGame(3),
		},
	], [onSelectGame])

	useEffect(() => {
		setGames(initialGames)
	}, [initialGames])

	const onSearchInput = (value) => {
		setSearchValue(value)
		const matches = initialGames.filter(game => game.name.includes(value))
		setGames(matches)
	}

	return (
		<GameSearch
			headerData={headerData}
			translations={translations}
			theme={theme}
			searchValue={searchValue}
			onSearchInput={onSearchInput}
			games={games}
			selectedGames={selectedGames}
		/>
	)
}

GameSearchWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
}

const mapStateToProps = state => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(GameSearchWrapper)
