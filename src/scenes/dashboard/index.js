import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import HeartSvg from '../../assets/svg/heart.svg'
import GameSvg from '../../assets/svg/game.svg'
import SportSvg from '../../assets/svg/sport.svg'
import CookSvg from '../../assets/svg/cook.svg'
import StudySvg from '../../assets/svg/study.svg'
import PetSvg from '../../assets/svg/pet.svg'


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
				icon={<HeartSvg />}
				backgroundColor={theme.love}
				onClick={() => {}}
			/>
			<SC.DCard
				title="Jeu en ligne"
				icon={<GameSvg />}
				backgroundColor={theme.game}
				onClick={() => {}}
			/>
			<SC.DCard
				title="Sport"
				icon={<SportSvg />}
				backgroundColor={theme.sport}
				onClick={() => {}}
			/>
			<SC.DCard
				title="Cuisine"
				icon={<CookSvg />}
				backgroundColor={theme.cook}
				onClick={() => {}}
			/>
			<SC.DCard
				title="Étude"
				icon={<StudySvg />}
				backgroundColor={theme.study}
				onClick={() => {}}
			/>
			<SC.DCard
				title="Animaux"
				icon={<PetSvg />}
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


