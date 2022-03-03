import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const HomeCard = (props) => {
	const { style, image, text, onPress } = props

	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.ImageWrapper onPress={onPress}>
				<SC.Image
					source={{
						uri: image,
					}}
				/>
				<SC.Text>{text}</SC.Text>
			</SC.ImageWrapper>
		</SC.Container>
	)
}

HomeCard.propTypes = {
	style: PropTypes.array,
	image: PropTypes.string,
	text: PropTypes.string,
	onPress: PropTypes.func,
}

export default HomeCard