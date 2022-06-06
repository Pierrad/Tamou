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

import { getAgeFromTimestamp } from '../../helpers/date'

import * as SC from './styled'
import { gameTranslation, rankingStringTranslation } from '../../helpers/game'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH
const SWIPE_THRESHOLD_HEIGHT = 0.10 * SCREEN_HEIGHT
const SWIPE_OUT_DURATION = 250


const SwipeGameCard = (props) => {
	const { style, image, username, subtitle, onLike, onDislike, onProfile } = props
	const { t } = useTranslation()

	const [isRight, setIsRight] = useState(false)
	const [isLeft, setIsLeft] = useState(false)
	const [isBottom, setIsBottom] = useState(false)

	const age = getAgeFromTimestamp(props.birthday)

	const games = props?.gameSection?.games?.map((game) => ({
		name: gameTranslation[game.game],
		level: game.level || game.ratio || t(rankingStringTranslation[game.rank]),
	}))


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
				} else if(gesture.dy > SWIPE_THRESHOLD_HEIGHT) {
					setIsRight(false)
					setIsLeft(false)
					setIsBottom(true)
				}
			},
			onPanResponderRelease: (event, gesture) => {
				if (gesture.dx > SWIPE_THRESHOLD) {
					forceSwipe('right')
					onLike()
				} else if (gesture.dx < -SWIPE_THRESHOLD) {
					forceSwipe('left')
					onDislike()
				} else if(gesture.dy > SWIPE_THRESHOLD_HEIGHT) {
					forceSwipe('down')
					onProfile()
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
		const x = direction === 'right'
			? SCREEN_WIDTH
			: direction === 'left'
				? -SCREEN_WIDTH
				: 0
		const y = direction === 'down' ? SCREEN_HEIGHT : 0
		Animated.timing(position, {
			useNativeDriver: false,
			toValue: {x, y},
			duration: SWIPE_OUT_DURATION,
		}).start(() => onSwipeComplete())
	}

	const onSwipeComplete = () => {
		position.setValue({x: 0, y: 0})
		setIsLeft(false)
		setIsRight(false)
		setIsBottom(false)
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
		setIsBottom(false)
	}

	const renderGames = games ? games?.map((game, i) => (
		<SC.Game key={i}>
			<SC.Label>{game.name}</SC.Label>
			<SC.Value>{game.level}</SC.Value>
		</SC.Game>
	)) : null

	return (
		<SC.Container style={style ? style[0] : {}}>
			<Animated.View
				style={[
					getCardStyle(),
					SC.styles.card,
				]}
				{...panResponder.panHandlers}
			>
				<SC.Image
					source={{
						uri: image,
					}} />

				<SC.Profil>
					<SC.Title>{`${username}, ${age} ans`}</SC.Title>
					<SC.Subtitle>{subtitle}</SC.Subtitle>
					{renderGames}
				</SC.Profil>
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
				{isBottom && (
					<SC.Profile>
						<SC.Text>{t('love_swipe_screen_profile')}</SC.Text>
					</SC.Profile>
				)}
			</Animated.View>
		</SC.Container>
	)
}

SwipeGameCard.propTypes = {
	style: PropTypes.array,
	image: PropTypes.string,
	username: PropTypes.string,
	subtitle: PropTypes.string,
	onLike: PropTypes.func,
	onDislike: PropTypes.func,
	onProfile: PropTypes.func,
	publicID: PropTypes.string,
	birthday: PropTypes.number,
	gameSection: PropTypes.object,
}



export default SwipeGameCard