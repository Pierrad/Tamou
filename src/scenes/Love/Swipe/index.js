import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const SwipeScreen = (props) => {
	const { headerData } = props

	const onLike = () => {
		console.log('onLike')
	}

	const onDislike = () => {
		console.log('onDislike')
	}

	return (
		<SC.Container>
			<SC.Header {...headerData} />
			<SC.Card 
				image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
				title="Julia"
				subtitle="5km"
				age="26"
				onLike={onLike}
				onDislike={onDislike}
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
					<SC.Icon name="heart" size={30} color="#FFF" />
				</SC.LikeButton>
			</SC.Buttons>
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

}

export default SwipeScreen