import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const AgePicker = (props) => {
	const { style, onArrowPress } = props
	const [day, setDay] = useState('')
	const [month, setMonth] = useState('')
	const [year, setYear] = useState('')

	const handleArrowPress = () => {
		if (day && month && year) {
			onArrowPress(`${day}/${month}/${year}`)
		}
	}


	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.Title>Je suis né le...</SC.Title>
			<SC.Inputs>
				<SC.Input
					placeholder="JJ"
					keyboardType="numeric"
					maxLength={2}
					onChangeText={(text) => setDay(text)}
					value={day}
				/>
				<SC.Input
					placeholder="MM"
					keyboardType="numeric"
					maxLength={2}
					onChangeText={(text) => setMonth(text)}
					value={month}
				/>
				<SC.Input
					placeholder="AAAA"
					keyboardType="numeric"
					maxLength={4}
					onChangeText={(text) => setYear(text)}
					value={year}
				/>
			</SC.Inputs>
			<SC.Button
				onPress={handleArrowPress}
				underlayColor='#fff'
			>
				<SC.Icon name="arrowright" size={30} color="#000" />
			</SC.Button> 
		</SC.Container>
	)
}

AgePicker.propTypes = {
	style: PropTypes.array,
	onArrowPress: PropTypes.func,
}

export default AgePicker