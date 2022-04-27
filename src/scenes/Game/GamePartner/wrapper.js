import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import GamePartner from './index'

const GamePartnerWrapper = (props) => {
	const { theme, navigation } = props
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
		title: 'League of Legends',
		leftIconName: 'chevron-left',
		onParametersPress: () => {console.log('')},
		theme: theme
	}), [navigation, theme])

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
		/>
	)
}

GamePartnerWrapper.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(GamePartnerWrapper)

