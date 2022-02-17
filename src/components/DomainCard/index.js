import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const DomainCard = ({ style, backgroundColor, icon, title, onClick }) => (
	<SC.Container style={style}>
		<SC.Content
			backgroundColor={backgroundColor}
			onPress={onClick}
			underlayColor={backgroundColor}
		>
			<SC.Wrap>
				{icon}
				<SC.Title>{title}</SC.Title>
			</SC.Wrap>
		</SC.Content>
	</SC.Container>
)

DomainCard.propTypes = {
	style: PropTypes.array,
	title: PropTypes.string,
	icon: PropTypes.element,
	backgroundColor: PropTypes.string,
	onClick: PropTypes.func,
}

export default DomainCard


