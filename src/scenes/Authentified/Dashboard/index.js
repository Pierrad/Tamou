import React from 'react'
import PropTypes from 'prop-types'
import AntIcon from 'react-native-vector-icons/AntDesign'
import IoIcon from 'react-native-vector-icons/Ionicons'

import * as SC from './styled'

const DashboardScreen = (props) => {
	const { theme, navigation, translations, avatar, hasLoveSection, hasGameSection } = props

	return (
		<SC.Container>
			<SC.Header 
				title={translations.hello}
				onButtonPress={() => navigation.navigate('Settings')}
				leftIconName="settings"
				onNotificationPress={() => navigation.navigate('Notification')}
				numberOfNotification={5}
				onAvatarPress={() => navigation.navigate('Profil')}
				avatar={avatar}
				theme={theme}
			/>
			<SC.Title>{translations.categories}</SC.Title>
			<SC.CardList>
				{hasLoveSection && (
					<SC.DCard
						title={translations.loveCategoryTitle}
						icon={<AntIcon name="hearto" size={24} color={theme.background} />}
						backgroundColor={theme.love}
						onClick={() => navigation.navigate('LoveSurvey')}
					/>
				)}
				{hasGameSection && (
					<SC.DCard
						title={translations.gameCategoryTitle}
						icon={<IoIcon name="game-controller-outline" size={24} color={theme.background} />}
						backgroundColor={theme.game}
						onClick={() => navigation.navigate('GameDashboard')}
					/>
				)}
			</SC.CardList>
		</SC.Container>
	)
}

DashboardScreen.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	translations: PropTypes.objectOf(PropTypes.string),
	avatar: PropTypes.string,
	hasLoveSection: PropTypes.bool,
	hasGameSection: PropTypes.bool,
}

export default DashboardScreen