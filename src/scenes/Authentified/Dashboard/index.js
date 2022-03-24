import React from 'react'
import PropTypes from 'prop-types'
import AntIcon from 'react-native-vector-icons/AntDesign'
import IoIcon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import MMIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as SC from './styled'

const DashboardScreen = (props) => {
	const { theme, navigation, translations } = props

	return (
		<SC.Container>
			<SC.Header 
				title={translations.hello}
				onButtonPress={() => navigation.navigate('Settings')}
				leftIconName="settings"
				onNotificationPress={() => navigation.navigate('Notification')}
				numberOfNotification={5}
				onAvatarPress={() => navigation.navigate('Profil')}
				avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
				theme={theme}
			/>
			<SC.Title>{translations.categories}</SC.Title>
			<SC.CardList>
				<SC.DCard
					title={translations.loveCategoryTitle}
					icon={<AntIcon name="hearto" size={24} color={theme.background} />}
					backgroundColor={theme.love}
					onClick={() => navigation.navigate('LoveSurvey')}
				/>
				<SC.DCard
					title={translations.gameCategoryTitle}
					icon={<IoIcon name="game-controller-outline" size={24} color={theme.background} />}
					backgroundColor={theme.game}
					onClick={() => navigation.navigate('GameSurvey')}

				/>
				<SC.DCard
					title={translations.sportCategoryTitle}
					icon={<MIcon name="sports-basketball" size={24} color={theme.background} />}
					backgroundColor={theme.sport}
					onClick={() => {}}
				/>
				<SC.DCard
					title={translations.cookingCategoryTitle}
					icon={<MMIcon name="cookie" size={24} color={theme.background} />}
					backgroundColor={theme.cook}
					onClick={() => {}}
				/>
				<SC.DCard
					title={translations.studyCategoryTitle}
					icon={<IoIcon name="pencil" size={24} color={theme.background} />}
					backgroundColor={theme.study}
					onClick={() => {}}
				/>
				<SC.DCard
					title={translations.petCategoryTitle}
					icon={<MIcon name="pets" size={24} color={theme.background} />}
					backgroundColor={theme.pet}
					onClick={() => {}}
				/>
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
}

export default DashboardScreen