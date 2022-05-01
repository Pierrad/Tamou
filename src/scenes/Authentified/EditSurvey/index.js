import React from 'react'
import PropTypes from 'prop-types'

import BasicHeader from '../../../components/BasicHeader'

import * as SC from './styled'

const GamePartner = props => {
	const { headerData, color, theme, onSubmit, questions, onToggle } = props

	return (
		<SC.Container>
			<SC.Header {...headerData} />
			<SC.Questions>
				{questions.map((question, i) => (
					<SC.Question
						key={i}
						id={i}
						color={color}
						onPress={onToggle}
						{...question}
					/>
				))}
			</SC.Questions>
			<SC.SaveBox color={color}>
				<SC.SaveIcon 
					name="check"
					size={30}
					color={theme.pureWhite}
					onPress={onSubmit}
				/>
			</SC.SaveBox>
		</SC.Container>
	)
}

GamePartner.propTypes = {
	headerData: PropTypes.shape(BasicHeader.propTypes),
	theme: PropTypes.object,
	color: PropTypes.string,
	onSubmit: PropTypes.func,
	questions: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string,
		options: PropTypes.arrayOf(PropTypes.shape({
			label: PropTypes.string,
			value: PropTypes.string,
		})),
	})),
	onToggle: PropTypes.func,
}

export default GamePartner
