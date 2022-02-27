import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AntIcon from 'react-native-vector-icons/AntDesign'
import IoIcon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import MMIcon from 'react-native-vector-icons/MaterialCommunityIcons'


import * as SC from './styled'

const DashboardScreen = ({ theme, navigation, user }) => {
	const { username } = user 

	return (
		<SC.Container>
			<SC.Header 
				title={`Bonjour ${username}`}
				onBurgerPress={() => {}}
				onNotificationPress={() => navigation.navigate('Notification')}
				numberOfNotification={5}
				onAvatarPress={() => navigation.navigate('Profil')}
				avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
				theme={theme}
			/>
			<SC.Title>Vos intêrets</SC.Title>
			<SC.CardList>
				<SC.DCard
					title="Rencontre"
					icon={<AntIcon name="hearto" size={24} color={theme.background} />}
					backgroundColor={theme.love}
					onClick={() => {}}
				/>
				<SC.DCard
					title="Jeu en ligne"
					icon={<IoIcon name="game-controller-outline" size={24} color={theme.background} />}
					backgroundColor={theme.game}
					onClick={() => {}}
				/>
				<SC.DCard
					title="Sport"
					icon={<MIcon name="sports-basketball" size={24} color={theme.background} />}
					backgroundColor={theme.sport}
					onClick={() => {}}
				/>
				<SC.DCard
					title="Cuisine"
					icon={<MMIcon name="cookie" size={24} color={theme.background} />}
					backgroundColor={theme.cook}
					onClick={() => {}}
				/>
				<SC.DCard
					title="Étude"
					icon={<IoIcon name="pencil" size={24} color={theme.background} />}
					backgroundColor={theme.study}
					onClick={() => {}}
				/>
				<SC.DCard
					title="Animaux"
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
	user: PropTypes.shape({
		username: PropTypes.string.isRequired,
	}),
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)


