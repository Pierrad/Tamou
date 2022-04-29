import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import ToggleRectButton from '../../../components/ToggleRectButton'
import SwipeGameCard from '../../../components/SwipeGameCard'

const GameSwipe = (props) => {
	const { headerData, toggles, selectedToggles, card, onLike, onDislike } = props



	return (
		<SC.Container>
			<SC.Header {...headerData} />
			<SC.Toggles
				horizontal={true}
			>
				{toggles.map((toggle, index) => (
					<SC.ToggleButton
						key={index}
						isSelected={selectedToggles.includes(toggle.id)}
						{...toggle}
					/>
				))}
			</SC.Toggles>
			<SC.Card 
				{...card}
			/>
			<SC.Buttons>
				<SC.DislikeButton
					onPress={onDislike}
					underlayColor='#fff'
				>
					<SC.Icon name="close" size={30} color="#FFF" />
				</SC.DislikeButton>
				<SC.LikeButton
					onPress={onLike}
					underlayColor='#fff'
				>
					<SC.Icon2 name="game-controller" size={30} color="#FFF" />
				</SC.LikeButton>
			</SC.Buttons>
		</SC.Container>
	)
}

GameSwipe.propTypes = {
	headerData: PropTypes.shape({
		onButtonPress: PropTypes.func,
		color: PropTypes.string,
		colorInverted: PropTypes.string,
		title: PropTypes.string,
		onDotPress: PropTypes.func,
	}),
	toggles: PropTypes.arrayOf(PropTypes.shape(ToggleRectButton.propTypes)),
	selectedToggles: PropTypes.arrayOf(PropTypes.number),
	card: PropTypes.shape(SwipeGameCard.propTypes),
	onLike: PropTypes.func,
	onDislike: PropTypes.func,
}

export default GameSwipe