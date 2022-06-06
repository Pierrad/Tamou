import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const Image = (props) => {
	const { style, source } = props

	if (typeof source === 'number') {
		return (
			<SC.Image
				style={style}
				source={source}
			/>
		)
	} else if (typeof source === 'string') {
		return (
			<SC.Image
				style={style}
				source={{
					uri: source,
				}}
			/>
		)
	}
  
	return null
}

Image.propTypes = {
	style: PropTypes.array,
	source: PropTypes.any,
}

export default Image