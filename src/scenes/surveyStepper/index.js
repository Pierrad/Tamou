import React, { useState } from 'react'

import * as SC from './styled'

const SurveyStepperScreen = () => {
	// Call setStep on click on arrow button at the right bottom of each step screen 
	const [step, setStep] = useState(0)


	const renderStep = (step) => {
		switch (step) {
		case 0:
			return <SC.GenderPickerContainer />
		case 1:
			return <SC.AgePickerContainer />
		default:
			return null
		}
	}

	return (
		<SC.Container>
			{renderStep(step)}
		</SC.Container>
	)
}

SurveyStepperScreen.propTypes = {}

export default SurveyStepperScreen
