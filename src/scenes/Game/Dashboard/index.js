import React from 'react'
import PropTypes from 'prop-types'
import ConnectedHeader from '../../../components/ConnecterHeader'

import * as SC from './styled'

const GameDashboardScreen = (props) => {
	const { theme, translations, headerData, navigation, cards } = props

	const renderMatchCard = ({ item }) => (
		<SC.MatchCard
			text={item.text}
			image={item.image}
			onPress={item.onPress}
		/>
	)

	return (
		<SC.Container>
			<SC.Header {...headerData} />
			<SC.Title>{translations.subtitle}</SC.Title>
			<SC.MatchList
				data={cards}
				renderItem={renderMatchCard}
				numColumns={2}
				contentContainerStyle={SC.styles.flatList}
			/>
			<SC.Button
				title={translations.cta}
				onPress={() => navigation.navigate('GameSearch')}
				underlayColor={theme.game}
				textColor={theme.pureWhite}
				style={SC.styles.button}
			/>
		</SC.Container>
	)
}

GameDashboardScreen.propTypes = {
	theme: PropTypes.object,
	translations: PropTypes.objectOf(PropTypes.string),
	headerData: PropTypes.shape(ConnectedHeader.propTypes),
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	cards: PropTypes.arrayOf(PropTypes.shape({
		game: PropTypes.string,
		image: PropTypes.string,
		onPress: PropTypes.func,
	})),
}

export default GameDashboardScreen