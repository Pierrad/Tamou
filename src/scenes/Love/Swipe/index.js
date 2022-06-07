import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const SwipeScreen = (props) => {
	const { headerData, translations, onLike, onDislike, onProfile, currentProfile, hasError } = props

	const renderCard = useMemo(() => {
		return (
			<SC.Card
				image={currentProfile?.avatar}
				title={currentProfile?.username}
				subtitle={currentProfile?.tagline}
				birthday={currentProfile?.birthday}
				onLike={onLike}
				onDislike={onDislike}
				onProfile={onProfile}
			/>
		)
	}, [currentProfile, onDislike, onLike, onProfile])

	return (
		<SC.Container>
			<SC.Header {...headerData} />
			{hasError || currentProfile === null ? (
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
							onPress={onDislike}
							underlayColor='#fff'
						>
							<SC.Icon name="close" size={30} color="#FFF" />
						</SC.DislikeButton>
						<SC.LikeButton
							onPress={onLike}
							underlayColor='#fff'
						>
							<SC.Icon name="heart" size={30} color="#FFF" />
						</SC.LikeButton>
					</SC.Buttons>
				</>
			)}
			
		</SC.Container>
	)
}

SwipeScreen.propTypes = {
	headerData: PropTypes.shape({
		onButtonPress: PropTypes.func,
		color: PropTypes.string,
		colorInverted: PropTypes.string,
		title: PropTypes.string,
		onDotPress: PropTypes.func,
	}),
	translations: PropTypes.object,
	onLike: PropTypes.func,
	onDislike: PropTypes.func,
	onProfile: PropTypes.func,
	currentProfile: PropTypes.object,
	hasError: PropTypes.bool,
}

export default SwipeScreen