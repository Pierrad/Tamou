import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { POST_LOVE_SWIPE } from '../../../redux/actions/love'
import { getAgeFromTimestamp } from '../../../helpers/date'
import { orientation, holiday, mood, movie, search, smoke } from '../../../helpers/love'

import DetailScreen from './index'

const DetailProfileWrapper = (props) => {
	const { theme, navigation, onSwipe, route } = props
	const user = route.params.profile ?? ''
	const isInSwipeMode = route.params.isInSwipeMode ?? false
	const { t } = useTranslation()

	const translations = {
		cta: t('game_partner_profile_cta_label'),
		orientation: t('love_profile_orientation_title'),
		holiday: t('love_profile_holiday_title'),
		mood: t('love_profile_mood_title'),
		movie: t('love_profile_movie_title'),
		search: t('love_profile_search_title'),
		smoke: t('love_profile_smoke_title'),
	}

	const goBack = () => {
		navigation.goBack()
	}

	const goToChat = () => {
		navigation.navigate('Chat')
	}

	const onLike = () => {
		onSwipe({
			like: true,
		})
		goBack()
	}

	const onDislike = () => {
		onSwipe({
			like: false,
		})
		goBack()
	}

	const age = getAgeFromTimestamp(user.birthday)

	const profile = {
		nameAndAge: `${user.username}, ${age} ans`,
		tagline: user.tagline ? `"${user.tagline}"` : '',
		image: user.avatar,
		others: {
			orientation: orientation(user.loveSection.orientation),
			holiday: holiday(user.loveSection.holiday),
			mood: mood(user.loveSection.mood),
			movie: movie(user.loveSection.movie),
			search: search(user.loveSection.search),
			smoke: smoke(user.loveSection.smoke),
		},
	}

	return (
		<DetailScreen
			theme={theme}
			translations={translations}
			goBack={goBack}
			user={profile}
			isInSwipeMode={isInSwipeMode}
			onLike={onLike}
			onDislike={onDislike}
			goToChat={goToChat}
		/>
	)
}

DetailProfileWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	onSwipe: PropTypes.func,
	route: PropTypes.object,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})


const mapDispatchToProps = (dispatch) => ({
	onSwipe: (input) => dispatch({ type: POST_LOVE_SWIPE, payload: input }),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailProfileWrapper)

