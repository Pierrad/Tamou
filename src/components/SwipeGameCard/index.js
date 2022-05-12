import React, { useEffect, useRef, useState } from 'react'
import {
	Animated,
	PanResponder,
	Dimensions,
	LayoutAnimation,
	UIManager,
} from 'react-native'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import * as SC from './styled'

const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH
const SWIPE_OUT_DURATION = 250


const SwipeGameCard = (props) => {
	const { style, image, username, subtitle, onLike, onDislike, game } = props
	const { t } = useTranslation()

	const [isRight, setIsRight] = useState(false)
	const [isLeft, setIsLeft] = useState(false)

	const position = useRef(new Animated.ValueXY()).current
	const panResponder = React.useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({
					x: gesture.dx,
					y: gesture.dy,
				})
				if(gesture.dx > SWIPE_THRESHOLD) {
					setIsRight(true)
					setIsLeft(false)
				} else if(gesture.dx < -SWIPE_THRESHOLD) {
					setIsRight(false)
					setIsLeft(true)
				}
			},
			onPanResponderRelease: (event, gesture) => {
				if (gesture.dx > SWIPE_THRESHOLD) {
					forceSwipe('right')
					onLike()
				} else if (gesture.dx < -SWIPE_THRESHOLD) {
					forceSwipe('left')
					onDislike()
				} else {
					resetPosition()
				}
			},
		}),
	).current

	useEffect(() => {
		UIManager.setLayoutAnimationEnabledExperimental?.(true)
		LayoutAnimation.spring()
	}, [])

	const forceSwipe = (direction) => {
		const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH
		Animated.timing(position, {
			useNativeDriver: false,
			toValue: {x, y: 0},
			duration: SWIPE_OUT_DURATION,
		}).start(() => onSwipeComplete())
	}

	const onSwipeComplete = () => {
		position.setValue({x: 0, y: 0})
		setIsLeft(false)
		setIsRight(false)
	}

	const getCardStyle = () => {
		const rotate = position.x.interpolate({
			inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
			outputRange: ['-120deg', '0deg', '120deg'],
		})
		return {
			...position.getLayout(),
			transform: [{rotate}],
		}
	}

	const resetPosition = () => {
		Animated.spring(position, {
			useNativeDriver: false,
			toValue: {x: 0, y: 0},
		}).start()
		setIsRight(false)
		setIsLeft(false)
	}

	return (
		<SC.Container style={style ? style[0] : {}}>
			<Animated.View
				style={[
					getCardStyle(),
					SC.styles.card,
				]}
				{...panResponder.panHandlers}
			>
				<SC.GameName>{game}</SC.GameName>
				<SC.Image
					source={{
						uri: image,
					}} />
				<SC.Title>{username}</SC.Title>
				<SC.Subtitle>{subtitle}</SC.Subtitle>
				{isRight && (
					<SC.Like>
						<SC.Text>{t('love_swipe_screen_like')}</SC.Text>
					</SC.Like>
				)}
				{isLeft && (
					<SC.Dislike>
						<SC.Text>{t('love_swipe_screen_dislike')}</SC.Text>
					</SC.Dislike>
				)}
			</Animated.View>
		</SC.Container>
	)
}

SwipeGameCard.propTypes = {
	style: PropTypes.array,
	image: PropTypes.string,
	game: PropTypes.string,
	username: PropTypes.string,
	subtitle: PropTypes.string,
	onLike: PropTypes.func,
	onDislike: PropTypes.func,
	publicID: PropTypes.string,
}



export default SwipeGameCard