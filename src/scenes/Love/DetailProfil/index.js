import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const DetailScreen = props => {
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
					source={{ uri: user.image }}
				/>
				{isInSwipeMode && (
					<SC.Buttons>
						<SC.DislikeButton
							onPress={onDislike}
							underlayColor='#fff'
						>
							<SC.Icon name="close" size={30} color="red" />
						</SC.DislikeButton>
						<SC.LikeButton
							onPress={onLike}
							underlayColor='#fff'
							style={SC.styles.button}
						>
							<SC.Icon2 name="heart" size={30} color="#FFF" />
						</SC.LikeButton>
					</SC.Buttons>
				)}
			</SC.Wrapper>
			<SC.Content>
				<SC.Title>{user.nameAndAge}</SC.Title>
				{renderOthers}
			</SC.Content>
			<SC.Button
				title={translations.cta}
				onPress={() => {}}
				underlayColor={theme.love}
				textColor={theme.love}
				style={SC.styles.button}
				isOutlined
			/>
		</SC.Container>
	)
}

DetailScreen.propTypes = {
	theme: PropTypes.object,
	translations: PropTypes.objectOf(PropTypes.string),
	goBack: PropTypes.func,
	user: PropTypes.shape({
		nameAndAge: PropTypes.string,
		image: PropTypes.string,
		others: PropTypes.object,
	}),
	isInSwipeMode: PropTypes.bool,
	onLike: PropTypes.func,
	onDislike: PropTypes.func,
}

export default DetailScreen
