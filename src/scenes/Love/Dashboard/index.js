import React from 'react'
import PropTypes from 'prop-types'
import ConnectedHeader from '../../../components/ConnecterHeader'

import * as SC from './styled'

const LoveDashboardScreen = (props) => {
	const { theme, translations, onButtonPress, headerData, profiles } = props




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
			{profiles && profiles.length > 0 ? (
				<SC.MatchList
					data={profiles}
					renderItem={renderMatchCard}
					numColumns={2}
					contentContainerStyle={SC.styles.flatList}
				/>
			) : (
				<SC.NoMatch>{translations.noMatches}</SC.NoMatch>
			)}

			<SC.Button
				title={translations.cta}
				onPress={onButtonPress}
				underlayColor={theme.love}
				textColor={theme.pureWhite}
				style={SC.styles.button}
			/>
		</SC.Container>
	)
}

LoveDashboardScreen.propTypes = {
	theme: PropTypes.object,
	translations: PropTypes.objectOf(PropTypes.string),
	onButtonPress: PropTypes.func,
	headerData: PropTypes.shape(ConnectedHeader.propTypes),
	profiles: PropTypes.arrayOf(PropTypes.object)
}

export default LoveDashboardScreen