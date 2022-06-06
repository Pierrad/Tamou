import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import * as SC from './styled'

const SurveyStepperScreen = (props) => {
	const { navigation, headerData, researchToggles, typeOfNightToggles, holidayToggles, smokeToggles, movieToggles, sendPreferences } = props

	const { t } = useTranslation()

	const [step, setStep] = useState(0)
	const [genderValues, setGenderValues] = useState([])
	const [research, setResearch] = useState('')
	const [typeOfNight, setTypeOfNight] = useState('')
	const [holiday, setHoliday] = useState('')
	const [smoke, setSmoke] = useState('')
	const [movie, setMovie] = useState('')

	const nextStep = useCallback(() => {
		setStep(step + 1)
	}, [step])

	const onPickerPress = useCallback((value) => {
		if (genderValues.includes(value)) {
			setGenderValues(genderValues.filter((item) => item !== value))
		} else {
			setGenderValues([...genderValues, value])
		}
	}, [genderValues])
	
	const onResearchPress = useCallback((value) => {
		setResearch(value)
	}, [])

	const onTypeOfNightPress = useCallback((value) => {
		setTypeOfNight(value)
	}, [])

	const onHolidayPress = useCallback((value) => {
		setHoliday(value)
	}, [])

	const onSmokePress = useCallback((value) => {
		setSmoke(value)
	}, [])

	const onMoviePress = useCallback((value) => {
		setMovie(value)
	}, [])
	
	const submit = useCallback(() => {
		sendPreferences({
			orientation: genderValues.length > 1 ? 'mf' : genderValues[0],
			search: research,
			mood: typeOfNight,
			holiday: holiday,
			smoke: smoke,
			movie: movie,
		})
		navigation.navigate('LoveDashboard')
	}, [genderValues, holiday, movie, navigation, research, sendPreferences, smoke, typeOfNight])

	const renderStep = useCallback((step) => {
		switch (step) {
		case 0:
			return <SC.GenderPickerContainer 
				onArrowPress={genderValues.length > 0 ? nextStep : null}
				onPickerPress={onPickerPress}
				value={genderValues}
				title={t('love_edit_title_orientation')}
			/>
		case 1:
			return <SC.ToggleButtonListContainer
				onArrowPress={research.length ? nextStep : null}
				title={t('love_edit_title_search')}
				onPress={onResearchPress}
				values={research}
				toggles={researchToggles}
			/>
		case 2:
			return <SC.ToggleButtonListContainer
				onArrowPress={typeOfNight.length ? nextStep : null}
				title={t('love_edit_title_mood')}
				onPress={onTypeOfNightPress}
				values={typeOfNight}
				toggles={typeOfNightToggles}
			/>
		case 3:
			return <SC.ToggleButtonListContainer
				onArrowPress={holiday.length ? nextStep : null}
				title={t('love_edit_title_holiday')}
				onPress={onHolidayPress}
				values={holiday}
				toggles={holidayToggles}
			/>
		case 4:
			return <SC.ToggleButtonListContainer
				onArrowPress={smoke.length ? nextStep : null}
				title={t('love_edit_title_smoke')}
				onPress={onSmokePress}
				values={smoke}
				toggles={smokeToggles}
			/>
		case 5:
			return <SC.ToggleButtonListContainer
				onArrowPress={movie.length ? nextStep : null}
				title={t('love_edit_title_movie')}
				onPress={onMoviePress}
				values={movie}
				toggles={movieToggles}
			/>
		case 6:
			return <SC.ValidateSurveyContainer
				onArrowPress={submit}
			/>
		default:
			return null
		}
	}, [genderValues, nextStep, onPickerPress, t, research, onResearchPress, researchToggles, typeOfNight, onTypeOfNightPress, typeOfNightToggles, holiday, onHolidayPress, holidayToggles, smoke, onSmokePress, smokeToggles, movie, onMoviePress, movieToggles, submit])

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
	sendPreferences: PropTypes.func,
}

export default SurveyStepperScreen
