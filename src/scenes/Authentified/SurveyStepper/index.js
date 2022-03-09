import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const SurveyStepperScreen = (props) => {
	const { theme, navigation } = props
	const [step, setStep] = useState(0)
	const [genderValue, setGenderValue] = useState('')
	// eslint-disable-next-line no-unused-vars
	const [ageValue, setAgeValue] = useState('')
	const [categoryValues, setCategoryValues] = useState([])

	const nextStep = useCallback(() => {
		setStep(step + 1)
	}, [step])

	const onPickerPress = (value) => {
		setGenderValue(value)
	}

	const onAgePress = useCallback((value) => {
		setAgeValue(value)
		nextStep()
	}, [nextStep])
	
	const onCategoryPress = useCallback((value) => {
		if (categoryValues.includes(value)) {
			setCategoryValues(categoryValues.filter((item) => item !== value))
		} else {
			setCategoryValues([...categoryValues, value])
		}
	}, [categoryValues])
	
	const submit = useCallback(() => {
		console.log('submit')
		navigation.navigate('Dashboard')
	}, [navigation])

	const renderStep = useCallback((step) => {
		switch (step) {
		case 0:
			return <SC.GenderPickerContainer 
				onArrowPress={genderValue ? nextStep : null}
				onPickerPress={onPickerPress}
				value={genderValue}
				title="Je suis..."
			/>
		case 1:
			return <SC.AgePickerContainer
				onArrowPress={onAgePress}
			/>
		case 2:
			return <SC.CategoriesPickerContainer
				onArrowPress={categoryValues.length ? nextStep : null}
				theme={theme}
				onCategoryPress={onCategoryPress}
				values={categoryValues}
			/>
		case 3:
			return <SC.ValidateSurveyContainer
				onArrowPress={submit}
				title="Bienvenue !"
			/>
		default:
			return null
		}
	}, [categoryValues, genderValue, nextStep, onAgePress, onCategoryPress, submit, theme])

	return (
		<SC.Container>
			{renderStep(step)}
		</SC.Container>
	)
}

SurveyStepperScreen.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
}

export default SurveyStepperScreen
