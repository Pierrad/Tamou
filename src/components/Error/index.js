import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const Error = (props) => {
	const { error } = props

	if (error.length <= 0) {
		return null
	}

	const animation = useRef()

	const playAnimation = () => {
		if (animation.current) {
			animation.current.play()
		}
	}

	useEffect(() => {
		playAnimation()
	}, [])

	return (
		<SC.Container>
			<SC.Lottie
				source={require('../../assets/lottie/error.json')}
				ref={animation}
			/>
			<SC.Text>{error}</SC.Text>
		</SC.Container>
	)
}

Error.propTypes = {
	error: PropTypes.string,
}

export default Error