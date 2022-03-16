import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const Validation = (props) => {
	const { validation } = props

	if (validation.length > 0) {
		return (
			<SC.Container>
				<SC.Lottie
					source={require('../../assets/lottie/check.json')}
					autoPlay
				/>
				<SC.Text>{validation}</SC.Text>
			</SC.Container>
		)
	}
	return null
}

Validation.propTypes = {
	validation: PropTypes.string,
}

export default Validation