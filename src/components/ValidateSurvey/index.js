import React from 'react'
import PropTypes from 'prop-types'
import LottieView from 'lottie-react-native'


import * as SC from './styled'

const ValidateSurvey = (props) => {
	const { style, title, onArrowPress } = props
	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.Title>{title}</SC.Title>
			<LottieView source={require('../../assets/lottie/check.json')} autoPlay />
			<SC.Button
				onPress={onArrowPress}
				underlayColor='#fff'
			>
				<SC.Icon name="arrowright" size={30} color="#000" />
			</SC.Button> 
		</SC.Container>
    
	)
}

ValidateSurvey.propTypes = {
	style: PropTypes.array,
	title: PropTypes.string,
	onArrowPress: PropTypes.func,
}

export default ValidateSurvey