import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const Error = (props) => {
	const { error } = props

	if (error.length > 0) {
		return (
			<SC.Container>
				<SC.Lottie
					source={require('../../assets/lottie/error.json')}
					autoPlay
				/>
				<SC.Text>{error}</SC.Text>
			</SC.Container>
		)
	}
	return null
}

Error.propTypes = {
	error: PropTypes.string,
}

export default Error