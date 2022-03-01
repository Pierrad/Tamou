import React from 'react'

import * as SC from './styled'

const GenderPicker = () => {
	return (
		<SC.Container>
			<SC.Title>Je suis...</SC.Title>
			<SC.Pickers>
				<SC.Picker>
					<SC.Image source={require('../../assets/images/femme.png')} />
				</SC.Picker>
				<SC.Picker>
					<SC.Image source={require('../../assets/images/homme.png')} />
				</SC.Picker>
			</SC.Pickers>
		</SC.Container>
	)
}

GenderPicker.propTypes = {}

export default GenderPicker