import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const SurveyStepperScreen = (props) => {
	const { navigation, headerData, researchToggles, typeOfNightToggles} = props

	const [step, setStep] = useState(0)
	const [research, setResearch] = useState('')
	const [typeOfNight, setTypeOfNight] = useState('')

	const nextStep = useCallback(() => {
		setStep(step + 1)
	}, [step])

	
	const onResearchPress = useCallback((value) => {
		setResearch(value)
	}, [])

	const onTypeOfNightPress = useCallback((value) => {
		setTypeOfNight(value)
	}, [])

	
	const submit = useCallback(() => {
		console.log('submit')
		navigation.navigate('GameDashboard')
	}, [navigation])

	const renderStep = useCallback((step) => {
		switch (step) {
		case 0:
			return <SC.ToggleButtonListContainer
				onArrowPress={research.length ? nextStep : null}
				title="Je joue à..."
				onPress={onResearchPress}
				values={research}
				toggles={researchToggles}
			/>
		case 1:
			return <SC.ToggleButtonListContainer
				onArrowPress={typeOfNight.length ? nextStep : null}
				title="Je suis plutôt..."
				onPress={onTypeOfNightPress}
				values={typeOfNight}
				toggles={typeOfNightToggles}
			/>
		
		case 2:
			return <SC.ValidateSurveyContainer
				onArrowPress={submit}
			/>
		default:
			return null
		}
	}, [nextStep, research, onResearchPress, researchToggles, typeOfNight, onTypeOfNightPress, typeOfNightToggles, submit])

	return (
		<SC.Container>
			<SC.Header {...headerData} />
			{renderStep(step)}
		</SC.Container>
	)
}

SurveyStepperScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
	headerData: PropTypes.shape({
		onButtonPress: PropTypes.func,
		color: PropTypes.string,
		colorInverted: PropTypes.string,
		title: PropTypes.string,
		onDotPress: PropTypes.func,
	}),
	researchToggles: PropTypes.array,
	typeOfNightToggles: PropTypes.array,
	holidayToggles: PropTypes.array,
	smokeToggles: PropTypes.array,
	movieToggles: PropTypes.array,
}

export default SurveyStepperScreen