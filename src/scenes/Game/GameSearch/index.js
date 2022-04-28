import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import ConnectedHeader from '../../../components/ConnecterHeader'
import HomeCard from '../../../components/HomeCard'

import * as SC from './styled'

const GameSearch = props => {
	const { theme, translations, headerData, searchValue, onSearchInput, games, selectedGames } = props

	const renderMatchCard = useCallback(({ item }) => (
		<SC.MatchCard
			{...item}
			isSelected={selectedGames.includes(item.id)}
		/>
	), [selectedGames])

	return (
		<SC.Container>
			<SC.Header {...headerData} />
			<SC.Title>{translations.subtitle}</SC.Title>
			<SC.SearchInput
				value={searchValue}
				onChangeText={onSearchInput}
				placeholder={translations.searchPlaceholder}
			/>
			<SC.MatchList
				data={games}
				renderItem={renderMatchCard}
				numColumns={2}
				contentContainerStyle={SC.styles.flatList}
			/>
			<SC.Button
				title={translations.cta}
				onPress={() => {}}
				underlayColor={theme.game}
				textColor={theme.pureWhite}
				style={SC.styles.button}
			/>
		</SC.Container>
	)
}

GameSearch.propTypes = {
	theme: PropTypes.object,
	translations: PropTypes.objectOf(PropTypes.string),
	headerData: PropTypes.shape(ConnectedHeader.propTypes),
	searchValue: PropTypes.string,
	onSearchInput: PropTypes.func,
	games: PropTypes.arrayOf(PropTypes.shape(HomeCard.PropTypes)),
	selectedGames: PropTypes.arrayOf(PropTypes.number),
}

export default GameSearch
