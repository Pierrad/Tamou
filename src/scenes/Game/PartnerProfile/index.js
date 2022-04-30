import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const GamePartner = props => {
	const { theme, translations, goBack, user, isInSwipeMode, onLike, onDislike } = props

	const renderOthers = Object.keys(user.others).map((other, i) => (
		<SC.Other key={i}>
			<SC.Label>{other}</SC.Label>
			<SC.Value>{user.others[other]}</SC.Value>
		</SC.Other>
	))

	return (
		<SC.Container>
			<SC.Wrapper>
				<SC.IconBox>
					<SC.LeftIcon
						onPress={goBack}
						name="chevron-left"
						size={30}
						color={theme.backgroundInverted}
					/>
				</SC.IconBox>
				<SC.Image
					source={user.rank}
				/>
				{isInSwipeMode && (
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
							style={SC.styles.button}
						>
							<SC.Icon2 name="game-controller" size={30} color="#FFF" />
						</SC.LikeButton>
					</SC.Buttons>
				)}
			</SC.Wrapper>
			<SC.Content>
				<SC.Title>{user.name}</SC.Title>
				{renderOthers}
			</SC.Content>
			<SC.Button
				title={translations.cta}
				onPress={() => {}}
				underlayColor={theme.game}
				textColor={theme.game}
				style={SC.styles.button}
				isOutlined
			/>
		</SC.Container>
	)
}

GamePartner.propTypes = {
	theme: PropTypes.object,
	translations: PropTypes.objectOf(PropTypes.string),
	goBack: PropTypes.func,
	user: PropTypes.objectOf(PropTypes.shape({
		name: PropTypes.string,
		rank: PropTypes.string,
		others: PropTypes.object,
	})),
	isInSwipeMode: PropTypes.bool,
	onLike: PropTypes.func,
	onDislike: PropTypes.func,
}

export default GamePartner
