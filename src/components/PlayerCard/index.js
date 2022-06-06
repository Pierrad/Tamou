import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const PlayerCard = (props) => {
	const { style, username, level, onCardPress, badge } = props

	return (
		<SC.Container style={style ? style[0] : 0}>
			<SC.Pressable onPress={onCardPress}>
				<SC.Wrapper>
					<SC.Left>
						<SC.Image source={badge} />
						<SC.Pseudo>{username}</SC.Pseudo>
					</SC.Left>
					<SC.Level>
						{level}
					</SC.Level>
				</SC.Wrapper>
			</SC.Pressable>
		</SC.Container>
	)
}

PlayerCard.propTypes = {
	style: PropTypes.array,
	onCardPress: PropTypes.func,
	badge: PropTypes.number,
	username: PropTypes.string,
	level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PlayerCard
