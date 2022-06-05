import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { gameTranslation } from '../../../helpers/game'

import GamePartner from './index'
import { GET_MULTIPLE_PARTNERS } from '../../../redux/actions/user'

const GamePartnerWrapper = (props) => {
	const { theme, navigation, route, user, partners: _partners, fetchPartners } = props
	const game = route.params?.game ?? ''
	const { t } = useTranslation()
	const [partners, setPartners] = useState([])
	const [searchMode, setSearchMode] = useState(false)
	const [search, setSearch] = useState('')

	useEffect(() => {
		fetchPartners({
			publicIds: user.gameSection.games.find((g) => g.game === game)?.partners ?? []
		})
	}, [fetchPartners, game, user.gameSection])

	const translations = {
		subtitle: t('game_partner_subtitle'),
		cta: t('game_partner_find_new_player'),
		searchPlaceholder: t('game_partner_search_placeholder'),
		noPartners: t('game_partner_no_partners'),
	}

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.navigate('GameDashboard'),
		title: gameTranslation[game],
		leftIconName: 'chevron-left',
		theme: theme
	}), [game, navigation, theme])

	
	const initialPartners = useMemo(() => {
		return _partners && _partners.map((p) => {
			return {
				publicID: p.publicID,
				username: p.username,
				badge: p.gameSection.games.find((g) => g.game === game)?.badge,
				level: p.gameSection.games.find((g) => g.game === game)?.level,
			}
		})
	}, [game, _partners])

	useEffect(() => {
		setPartners(initialPartners)
	}, [initialPartners])

	const onSearchPress = () => {
		setSearchMode(!searchMode)
	}

	const onSearchInput = (value) => {
		setSearch(value)
		const matches = initialPartners.filter(partner => partner.username.includes(value))
		setPartners(matches)
	}

	const goToMatch = () => {
		navigation.navigate('GameSwipe', { game })
	}

	const onPartnerPress = (id) => {
		navigation.navigate('GamePartnerProfile', { user: _partners?.find((p) => p.publicID === id) ?? {} })
	}

	return (
		<GamePartner
			theme={theme}
			headerData={headerData}
			translations={translations}
			partners={partners}
			onSearchPress={onSearchPress}
			isSearchMode={searchMode}
			onSearchInput={onSearchInput}
			searchValue={search}
			goToMatch={goToMatch}
			onPartnerPress={onPartnerPress}
		/>
	)
}

GamePartnerWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	route: PropTypes.object,
	user: PropTypes.object,
	fetchPartners: PropTypes.func,
	partners: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
	partners: state.userReducer.partners,
})

const mapDispatchToProps = (dispatch) => ({
	fetchPartners: (input) => dispatch({ type: GET_MULTIPLE_PARTNERS, payload: input }),
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePartnerWrapper)

