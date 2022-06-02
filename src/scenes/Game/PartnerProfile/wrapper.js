import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { rankingStringTranslation, gameTranslation } from '../../../helpers/game'
import { getAgeFromTimestamp } from '../../../helpers/date'
import { POST_SWIPE } from '../../../redux/actions/game'

import PartnerProfile from './index'

const PartnerProfileWrapper = (props) => {
	const { theme, navigation, route, onSwipe } = props
	const user = route.params.user ?? ''
	const game = route.params.game ?? ''
	const { t } = useTranslation()

	const translations = {
		cta: t('game_partner_profile_cta_label'),
	}

	const goBack = () => {
		navigation.goBack()
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
		name: `${user.username}, ${age} ans`,
		tagline: user.tagline,
		rank: user.image,
		games: user.gameSection.games.map((game) => ({
			name: gameTranslation[game.game],
			mood: game.mood,
			level: game.level || game.ratio || t(rankingStringTranslation[game.rank]),
			badge: game?.badge,
		})),
	}

	return (
		<PartnerProfile
			theme={theme}
			translations={translations}
			goBack={goBack}
			user={profile}
			isInSwipeMode={game !== ''}
			onLike={onLike}
			onDislike={onDislike}
		/>
	)
}

PartnerProfileWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	route: PropTypes.object,
	onSwipe: PropTypes.func,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = (dispatch) => ({
	onSwipe: (input) => dispatch({ type: POST_SWIPE, payload: input }),
})

export default connect(mapStateToProps, mapDispatchToProps)(PartnerProfileWrapper)

