import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AntIcon from 'react-native-vector-icons/AntDesign'
import IoIcon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import MMIcon from 'react-native-vector-icons/MaterialCommunityIcons'


import * as SC from './styled'

const DashboardScreen = ({ theme }) => (
	<SC.Container>
		<SC.Header 
			title="Bonjour PA"
			onBurgerPress={() => {}}
			onNotificationPress={() => {}}
			numberOfNotification={5}
			onAvatarPress={() => {}}
			avatar="https://reactnative.dev/img/tiny_logo.png"
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

DashboardScreen.propTypes = {
	theme: PropTypes.object,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)


