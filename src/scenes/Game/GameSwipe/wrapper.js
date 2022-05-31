import React, { useMemo, useState, useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { gameToId, IdToGame } from '../../../helpers/game'

import { togglesConfig } from './config'
import GameSwipe from './index'
import { POST_SWIPE } from '../../../redux/actions/game'
import { GET_PUBLIC_PROFILE } from '../../../redux/actions/user'

const GameSwipeWrapper = (props) => {
	const { theme, navigation, route, potentialMatch, getProfileFromID, onSwipe, error } = props
	const game = route.params?.game ?? ''
	const { t } = useTranslation()
	const [selected, isSelected] = useState([gameToId[game]])

	const translations = {
		error: t('game_swipe_no_more_match'),
	}

	const getCurrentProfile = useCallback(() => {
		getProfileFromID({
			games: selected.map((id) => IdToGame[id]),
		})
	}, [getProfileFromID, selected])

	useEffect(() => {
		getCurrentProfile()
	}, [getCurrentProfile])

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.goBack(),
		color: theme.backgroundInverted,
		colorInverted: theme.background,
		title: t('game_swipe_title'),
	}), [navigation, t, theme.background, theme.backgroundInverted])

	const onSelectGame = useCallback((game) => {
		const newSelected = [...selected]
		const index = newSelected.findIndex(g => g === game)
		if (index === -1) {
			newSelected.push(game)
		} else {
			newSelected.splice(index, 1)
		}
		isSelected(newSelected)
	}, [selected])

	const toggles = useMemo(() => {
		return togglesConfig(theme, onSelectGame)
	}, [theme, onSelectGame])

	const onLike = useCallback(() => {
		getCurrentProfile()
		onSwipe({
			like: true,
		})
	}, [getCurrentProfile, onSwipe])

	const onDislike = useCallback(() => {
		getCurrentProfile()
		onSwipe({
			like: false,
		})
	}, [getCurrentProfile, onSwipe])

	const onProfile = useCallback(() => {
		navigation.navigate('GamePartnerProfile', { user: potentialMatch, game })
	}, [game, navigation, potentialMatch])

	return (
		<GameSwipe 
			key={potentialMatch}
			translations={translations}
			headerData={headerData}
			toggles={toggles}
			selectedToggles={selected}
			card={potentialMatch}
			onLike={onLike}
			onDislike={onDislike}
			onProfile={onProfile}
			hasError={error}
		/>
	)
}

GameSwipeWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	route: PropTypes.object,
	potentialMatch: PropTypes.object,
	getProfileFromID: PropTypes.func,
	onSwipe: PropTypes.func,
	error: PropTypes.bool,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	potentialMatch: state.userReducer.potentialMatchProfil,
	error: state.gameReducer.error,
})

const mapDispatchToProps = (dispatch) => ({
	getProfileFromID: (input) => dispatch({ type: GET_PUBLIC_PROFILE, payload: input }),
	onSwipe: (input) => dispatch({ type: POST_SWIPE, payload: input }),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameSwipeWrapper)

