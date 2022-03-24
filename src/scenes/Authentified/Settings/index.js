import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const SettingsScreen = ({ headerData, onFrenchTranslationPress, onEnglishTranslationPress }) => {

	return (
		<SC.Container>
			<SC.Wrapper>
				<SC.Content>
					<SC.Header {...headerData} />
				</SC.Content>
				<SC.Content>
					<SC.LanguageButton onPress={onFrenchTranslationPress}>
						<SC.Text>
              Français
						</SC.Text>
					</SC.LanguageButton>
					<SC.LanguageButton onPress={onEnglishTranslationPress}> 
						<SC.Text>
              English
						</SC.Text>
					</SC.LanguageButton>
				</SC.Content>
			</SC.Wrapper>
		</SC.Container>
	)
}

SettingsScreen.propTypes = {
	headerData: PropTypes.shape({
		onButtonPress: PropTypes.func,
		color: PropTypes.string,
		colorInverted: PropTypes.string,
		title: PropTypes.string,
		onDotPress: PropTypes.func,
	}),
	onFrenchTranslationPress: PropTypes.func,
	onEnglishTranslationPress: PropTypes.func,
}

export default SettingsScreen