import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Swipeable } from 'react-native-gesture-handler'
import { Animated } from 'react-native'

import * as SC from './styled'

const NotificationCard = (props) => {
	const { id, title, isNew, dateAgo , onDelete } = props
	const [_, set_] = useState(null)
	const AnimatedView = Animated.createAnimatedComponent(SC.Options)

	const handleDelete = () => {
		onDelete(id)
		_.close()
	}

	const renderRightActions = (progress, dragX) => {
		const trans = dragX.interpolate({
			inputRange: [0, 50, 100],
			outputRange: [0, 0, 1],
		})
		return (
			<AnimatedView
				style={{
					transform: [{ translateX: trans }],
				}}
			>
				<SC.DeleteOption
					onPress={handleDelete}
				>
					<SC.Icon name="trash-o" size={50} color="#FFF" />
				</SC.DeleteOption>
			</AnimatedView>
		)
	}


	return (
		<Swipeable
			friction={1}
			ref={ref => set_(ref)}
			renderRightActions={renderRightActions}
		>
			<SC.Container
				isNew={isNew}
			>
				<SC.Wrapper>
					<SC.Date>{dateAgo}</SC.Date>
					<SC.Text>{title}</SC.Text>
				</SC.Wrapper>
			</SC.Container>
		</Swipeable>
	)
}

NotificationCard.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	isNew: PropTypes.bool,
	dateAgo: PropTypes.string,
	onDelete: PropTypes.func,
}

export default NotificationCard