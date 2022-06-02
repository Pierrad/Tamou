import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const PartnerProfile = props => {
	const { theme, translations, goBack, user, isInSwipeMode, onLike, onDislike } = props


	const renderGames = user.games.map((game, i) => (
		<SC.Game key={i}>
			<SC.Divider />
			<SC.Label>{game.name}</SC.Label>
			<SC.Field>
				<SC.Label>Mood</SC.Label>
				<SC.Value>{game.mood}</SC.Value>
			</SC.Field>
			<SC.Field>
				<SC.Label>Niveau</SC.Label>
				<SC.Value>{game.level}</SC.Value>
			</SC.Field>
			<SC.Divider />
			{game.badge && (
				<SC.Badge source={game.badge}/>
			)}
		</SC.Game>
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
					source={{ uri: user.rank }}
				/>
				{!isInSwipeMode && (
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
				<SC.TagLine>{`"${user.tagline}"`}</SC.TagLine>
				{renderGames}
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

PartnerProfile.propTypes = {
	theme: PropTypes.object,
	translations: PropTypes.objectOf(PropTypes.string),
	goBack: PropTypes.func,
	user: PropTypes.shape({
		name: PropTypes.string,
		tagline: PropTypes.string,
		rank: PropTypes.string,
		games: PropTypes.array,
	}),
	isInSwipeMode: PropTypes.bool,
	onLike: PropTypes.func,
	onDislike: PropTypes.func,
}

export default PartnerProfile
