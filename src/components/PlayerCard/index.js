import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const PlayerCard = (props) => {
	const { style, pseudo, level, onPress } = props

	return (
		<SC.Container style={style ? style[0] : 0}>
			<SC.Wrapper onPress={onPress}>
				<SC.Left>
					<SC.Image source={require('../../assets/images/lol/bronze.png')} />
					<SC.Pseudo>{pseudo}</SC.Pseudo>
				</SC.Left>
				<SC.Level>
					{level}
				</SC.Level>
			</SC.Wrapper>
		</SC.Container>
	)
}

PlayerCard.propTypes = {
	style: PropTypes.array,
	onPress: PropTypes.func,
	rank: PropTypes.string,
	pseudo: PropTypes.string,
	level: PropTypes.string,
}

export default PlayerCard
