import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ProfilHeader = (props) => {
	const { style, title, fields } = props

	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.Content>
				<SC.Title>{title}</SC.Title>
				<SC.Fields>
					{fields.map((field, index) => (
						<SC.Field
							key={index}
							label={field.label}
							value={field.value}
						/>
					))}
				</SC.Fields>
			</SC.Content>
		</SC.Container>
	)
}

ProfilHeader.propTypes = {
	style: PropTypes.array,
	title: PropTypes.string,
	fields: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string,
		isEditable: PropTypes.bool,
	})),
}

export default ProfilHeader