import React, { useMemo, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import GameSwipe from './index'

const GameSwipeWrapper = (props) => {
	const { theme, navigation } = props 
	const { t } = useTranslation()
	const [selected, isSelected] = useState([])

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.goBack(),
		color: theme.backgroundInverted,
		colorInverted: theme.background,
		title: t('game_swipe_title'),
	}), [navigation, t, theme.background, theme.backgroundInverted])

	const onSelectGame = useCallback((game) => {
		console.log(game)
		const newSelected = [...selected]
		const index = newSelected.findIndex(g => g === game)
		if (index === -1) {
			newSelected.push(game)
		} else {
			newSelected.splice(index, 1)
		}
		isSelected(newSelected)
	}, [selected])

	const gamesToggles = useMemo(() => [
		{
			id: 0,
			text: 'League of Legends',
			backgroundSelectedColor: theme.game,
			onPress: () => onSelectGame(0),
			borderColor: theme.game,
		},
		{
			id: 1,
			text: 'Valorant',
			backgroundSelectedColor: theme.game,
			onPress: () => onSelectGame(1),
			borderColor: theme.game,
		},
		{
			id: 2,
			text: 'Minecraft',
			backgroundSelectedColor: theme.game,
			onPress: () => onSelectGame(2),
			borderColor: theme.game,
		},
		{
			id: 3,
			text: 'Fortnite',
			backgroundSelectedColor: theme.game,
			onPress: () => onSelectGame(3),
			borderColor: theme.game,
		},
	], [onSelectGame, theme.game])

	const onLike = () => {
		console.log('onLike')
	}

	const onDislike = () => {
		console.log('onDislike')
	}
	const card = {
		image: 'https://i.pinimg.com/originals/bf/4d/40/bf4d401aa059647cc24cc8408f203e44.png',
		title: '@The_Lion_Vassal',
		subtitle: 'Mid',
		game: 'League of Legends',
		onLike,
		onDislike,
	}

	return (
		<GameSwipe 
			headerData={headerData}
			toggles={gamesToggles}
			selectedToggles={selected}
			card={card}
			onLike={onLike}
			onDislike={onDislike}
		/>
	)
}

GameSwipeWrapper.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(GameSwipeWrapper)

