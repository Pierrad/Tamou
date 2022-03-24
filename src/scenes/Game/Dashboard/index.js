import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const GameDashboardScreen = (props) => {
	const { theme, translations } = props


	const cards = [
		{
			image: 'https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg',
			onPress: () => {},
		},
		{
			image: 'https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png',
			onPress: () => {},
		},
		{
			image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg',
			onPress: () => {},
		},
		{
			image: 'https://cdn2.unrealengine.com/7up-v2-3840x2160-e11fc91a84d6.jpg',
			onPress: () => {},
		},
		
	]

	const renderMatchCard = ({ item }) => (
		<SC.MatchCard
			text={item.text}
			image={item.image}
			onPress={item.onPress}
		/>
	)

	return (
		<SC.Container>
			<SC.Header 
				title={translations.title}
				onSettingsPress={() => {}}
				onParametersPress={() => {console.log('')}}
				theme={theme}
			/>
			<SC.Title>{translations.subtitle}</SC.Title>
			<SC.MatchList
				data={cards}
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

GameDashboardScreen.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	translations: PropTypes.objectOf(PropTypes.string),
}

export default GameDashboardScreen