import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import { isBirthdayIsValid } from '../../../helpers/date'

import * as SC from './styled'

const SurveyStepperScreen = (props) => {
	const { theme, translations, onSubmit, onError } = props
	const [step, setStep] = useState(0)
	const [genderValue, setGenderValue] = useState('')
	// eslint-disable-next-line no-unused-vars
	const [ageValue, setAgeValue] = useState(new Date())
	const [categoryValues, setCategoryValues] = useState([])

	const nextStep = useCallback(() => {
		setStep(step + 1)
	}, [step])

	const onPickerPress = (value) => {
		setGenderValue(value)
	}

	const onAgePress = useCallback((value) => {
		if (isBirthdayIsValid(value)) {
			setAgeValue(value.valueOf())
			nextStep()
		} else {
			onError(translations.birthdayError)
		}
	}, [nextStep, onError, translations.birthdayError])
	
	const onCategoryPress = useCallback((value) => {
		if (categoryValues.includes(value)) {
			setCategoryValues(categoryValues.filter((item) => item !== value))
		} else {
			setCategoryValues([...categoryValues, value])
		}
	}, [categoryValues])
	
	const renderStep = useCallback((step) => {
		switch (step) {
		case 0:
			return <SC.GenderPickerContainer 
				onArrowPress={genderValue ? nextStep : null}
				onPickerPress={onPickerPress}
				value={genderValue}
				title={translations.genderTitle}
			/>
		case 1:
			return <SC.AgePickerContainer
				onArrowPress={onAgePress}
				title={genderValue === 'male' ? translations.ageMaleTitle : translations.ageFemaleTitle}
			/>
		case 2:
			return <SC.CategoriesPickerContainer
				onArrowPress={categoryValues.length ? nextStep : null}
				theme={theme}
				onCategoryPress={onCategoryPress}
				values={categoryValues}
				title={translations.categoriesTitle}
			/>
		case 3:
			return <SC.ValidateSurveyContainer
				onArrowPress={onSubmit}
				title={translations.completeTitle}
			/>
		default:
			return null
		}
	}, [categoryValues, genderValue, nextStep, onAgePress, onCategoryPress, onSubmit, theme, translations])

	return (
		<SC.Container>
			{renderStep(step)}
		</SC.Container>
	)
}

SurveyStepperScreen.propTypes = {
	theme: PropTypes.object,
	translations: PropTypes.objectOf(PropTypes.string),
	onSubmit: PropTypes.func,
	onError: PropTypes.func,
}

export default SurveyStepperScreen
