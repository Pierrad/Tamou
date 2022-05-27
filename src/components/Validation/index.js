import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const Validation = (props) => {
	const { validation } = props

	if (validation.length <= 0) {
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
				source={require('../../assets/lottie/check.json')}
				ref={animation}
			/>
			<SC.Text>{validation}</SC.Text>
		</SC.Container>
	)
}

Validation.propTypes = {
	validation: PropTypes.string,
}

export default Validation