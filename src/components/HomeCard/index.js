import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const HomeCard = (props) => {
	const { style, image, text, onPress, isInSelectMode, isSelected } = props

	return (
		<SC.Container style={style ? {...style[0], ...SC.style.container} : SC.style.container}>
			<SC.ImageWrapper onPress={onPress}>
				<SC.Image
					source={{
						uri: image,
					}}
				/>
				<SC.Text>{text}</SC.Text>
				{isInSelectMode && (
					isSelected ? (
						<SC.SelectBox>
							<SC.SelectIcon
								name="checkcircle"
								size={24} 
								color="blue"
							/>
						</SC.SelectBox>
					) : (
						<SC.SelectBox>
							<SC.SelectIcon
								name="checkcircleo"
								size={24} 
								color="white"
							/>
						</SC.SelectBox>
					)
				)}
			</SC.ImageWrapper>
		</SC.Container>
	)
}

HomeCard.propTypes = {
	style: PropTypes.array,
	image: PropTypes.string,
	text: PropTypes.string,
	onPress: PropTypes.func,
	isInSelectMode: PropTypes.bool,
	isSelected: PropTypes.bool,
}

export default HomeCard