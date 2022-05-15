import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { gameTranslation } from '../../../helpers/game'

import GamePartner from './index'

const GamePartnerWrapper = (props) => {
	const { theme, navigation, route } = props
	const game = route.params?.game ?? ''
	const { t } = useTranslation()
	const [partners, setPartners] = useState([])
	const [searchMode, setSearchMode] = useState(false)
	const [search, setSearch] = useState('')

	const translations = {
		subtitle: t('game_partner_subtitle'),
		cta: t('game_partner_find_new_player'),
		searchPlaceholder: t('game_partner_search_placeholder'),
	}

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.navigate('GameDashboard'),
		title: gameTranslation[game],
		leftIconName: 'chevron-left',
		onParametersPress: () => {console.log('')},
		theme: theme
	}), [game, navigation, theme])

	const initialPartners = useMemo(()  => [
		{
			rank: '../../assets/images/lol/bronze.png',
			pseudo: '@The_Lion_Vassal',
			level: '1250',
		},
		{
			rank: '../../assets/images/lol/bronze.png',
			pseudo: '@Wassiiiiiim',
			level: '1555',
		},
		{
			rank: '../../assets/images/lol/bronze.png',
			pseudo: '@ME',
			level: '1850',
		},
		{
			rank: '../../assets/images/lol/bronze.png',
			pseudo: '@Pierrad',
			level: '2550',
		},
	], [])

	useEffect(() => {
		setPartners(initialPartners)
	}, [initialPartners])

	const onSearchPress = () => {
		setSearchMode(!searchMode)
	}

	const onSearchInput = (value) => {
		setSearch(value)
		const matches = initialPartners.filter(partner => partner.pseudo.includes(value))
		setPartners(matches)
	}

	const goToMatch = () => {
		navigation.navigate('GameSwipe', { game })
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
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePartnerWrapper)

