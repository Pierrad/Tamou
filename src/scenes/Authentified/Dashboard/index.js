import React from 'react'
import PropTypes from 'prop-types'
import AntIcon from 'react-native-vector-icons/AntDesign'
import IoIcon from 'react-native-vector-icons/Ionicons'
import IconE from 'react-native-vector-icons/Entypo'

import * as SC from './styled'

const DashboardScreen = (props) => {
	const { theme, navigation, translations, avatar, hasLoveSection, hasGameSection, onAddCategory, numberOfNotifications, handleNavigationToGame, handleNavigationToChat } = props

	return (
		<SC.Container>
			<SC.Header 
				title={translations.hello}
				onButtonPress={() => navigation.navigate('Settings')}
				leftIconName="settings"
				onNotificationPress={() => navigation.navigate('Notification')}
				numberOfNotification={numberOfNotifications}
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
						onClick={handleNavigationToGame}
					/>
				)}
			</SC.CardList>
			<SC.Buttons>
				<SC.PrincipalButton
					title={translations.addCategory}
					onPress={onAddCategory}
					underlayColor={theme.orange}
					textColor={theme.pureWhite}
					style={SC.styles.button}
				/>
				<SC.SecondaryButton
					onPress={handleNavigationToChat}
					underlayColor={theme.orange}
					style={SC.styles.button}
				>
					<IconE
						name="chat"
						size={24}
						color={theme.pureWhite}
					/>
				</SC.SecondaryButton>
			</SC.Buttons>
			
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
	onAddCategory: PropTypes.func,
	numberOfNotifications: PropTypes.number,
	handleNavigationToGame: PropTypes.func,
	handleNavigationToChat: PropTypes.func,
}

export default DashboardScreen