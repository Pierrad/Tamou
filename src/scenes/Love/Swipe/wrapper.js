import React, { useCallback, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { GET_LOVE_PUBLIC_PROFILE } from '../../../redux/actions/user'
import { POST_LOVE_SWIPE, RESET_LOVE_MATCHES } from '../../../redux/actions/love'

import SwipeScreen from './index'

const SwipeScreenWrapper = (props) => {
	const { theme, navigation, resetMatch, getProfileFromID, onSwipe, potentialMatch, error } = props 
	const { t } = useTranslation()

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.goBack(),
		color: theme.backgroundInverted,
		colorInverted: theme.background,
		title: t('love_swipe_title'),
	}), [navigation, t, theme.background, theme.backgroundInverted])

	const translations = {
		error: t('game_swipe_no_more_match'),
	}

	useEffect(() => {
		const listener = navigation.addListener('focus', () => {
			resetMatch()
		})

		return listener
	}, [navigation, resetMatch])

	useEffect(() => {
		return () => {
			resetMatch()
		}
	}, [resetMatch])

	const getCurrentProfile = useCallback(() => {
		getProfileFromID()
	}, [getProfileFromID])

	useEffect(() => {
		getCurrentProfile()
	}, [getCurrentProfile])

	const currentProfile = useMemo(() => {
		return potentialMatch
	}, [potentialMatch])

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
		navigation.navigate('LoveProfile', { profile: currentProfile, isInSwipeMode: true })
	}, [navigation, currentProfile])

	return (
		<SwipeScreen
			headerData={headerData}
			translations={translations}
			currentProfile={currentProfile}
			onProfile={onProfile}
			onLike={onLike}
			onDislike={onDislike}
			hasError={error}
		/>
	)
}

SwipeScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
		addListener: PropTypes.func.isRequired,
	}).isRequired,
	getProfileFromID: PropTypes.func,
	resetMatch: PropTypes.func,
	onSwipe: PropTypes.func,
	error: PropTypes.bool,
	potentialMatch: PropTypes.object,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	potentialMatch: state.userReducer.potentialMatchProfil,
	error: state.loveReducer.error,
})

const mapDispatchToProps = (dispatch) => ({
	getProfileFromID: (input) => dispatch({ type: GET_LOVE_PUBLIC_PROFILE, payload: input }),
	onSwipe: (input) => dispatch({ type: POST_LOVE_SWIPE, payload: input }),
	resetMatch: () => dispatch({ type: RESET_LOVE_MATCHES }),
})

export default connect(mapStateToProps, mapDispatchToProps)(SwipeScreenWrapper)

