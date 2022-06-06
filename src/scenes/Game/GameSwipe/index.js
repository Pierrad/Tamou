import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import ToggleRectButton from '../../../components/ToggleRectButton'
import SwipeGameCard from '../../../components/SwipeGameCard'

const GameSwipe = (props) => {
	const { translations, headerData, toggles, selectedToggles, card, onLike, onDislike, onProfile, hasError } = props
	
	const renderCard = useMemo(() => {
		return (
			<SC.Card
				{...card}
				key={card}
				onLike={onLike}
				onDislike={onDislike}
				onProfile={onProfile}
			/>
		)
	}, [card, onDislike, onLike, onProfile])

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
			{hasError || card === null ? (
				<SC.Error>
					<SC.ErrorText>
						{translations.error}
					</SC.ErrorText>
				</SC.Error>
			) : (
				<>
					{renderCard}
					<SC.Buttons>
						<SC.DislikeButton
							onPress={onLike}
							underlayColor='#fff'
						>
							<SC.Icon name="close" size={30} color="#FFF" />
						</SC.DislikeButton>
						<SC.LikeButton
							onPress={onDislike}
							underlayColor='#fff'
						>
							<SC.Icon2 name="game-controller" size={30} color="#FFF" />
						</SC.LikeButton>
					</SC.Buttons>
				</>
			)}

		</SC.Container>
	)
}

GameSwipe.propTypes = {
	translations: PropTypes.object,
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
	onProfile: PropTypes.func,
	hasError: PropTypes.bool,
}

export default GameSwipe