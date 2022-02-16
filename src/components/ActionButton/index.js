import React from 'react'
import PropTypes from 'prop-types'


import * as SC from './styled'

const ActionButton = ({ title, onPress }) => (
	<SC.Container>
		<SC.Button
			title={title}
			onPress={onPress}
		/>
	</SC.Container>

)

ActionButton.propTypes = {
	title: PropTypes.string,
	onPress: PropTypes.func,
}

export default ActionButton


