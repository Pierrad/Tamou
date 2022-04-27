import React from 'react'
import PropTypes from 'prop-types'
import ConnectedHeader from '../../../components/ConnecterHeader'
import Link from '../../../components/Link'
import * as SC from './styled'

const LoveMatchScreen = (props) => {
	const { theme, translations, onButtonPress,navigation} = props


	return (
		<SC.Container>
			<SC.Button
				title={translations.title}
				onPress={onButtonPress}
				underlayColor={theme.love}
				textColor={theme.pureWhite}
				style={SC.styles.button}
			/>
			<Link
				title={translations.continueSwipeButtonAction}
				onPress={() => navigation.navigate('LoveSwipe')}
				underlayColor="none"
			/>
		</SC.Container>
	)
}

LoveMatchScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func,
	}),
	theme: PropTypes.object,
	translations: PropTypes.objectOf(PropTypes.string),
	onButtonPress: PropTypes.func,
	headerData: PropTypes.shape(ConnectedHeader.propTypes)
}

export default LoveMatchScreen