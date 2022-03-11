import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { SET_ERROR } from '../../../redux/actions/app'

import SurveyStepperScreen from './index'

const SurveyStepperScreenWrapper = (props) => {
	const { theme, navigation, setError } = props 
	const { t } = useTranslation()

	const translations = {
		genderTitle: t('initial_survey_stepper_gender_title'),
		ageMaleTitle: t('initial_survey_stepper_age_male_title'),
		ageFemaleTitle: t('initial_survey_stepper_age_female_title'),
		categoriesTitle: t('initial_survey_stepper_choose_categories_title'),
		completeTitle: t('initial_survey_stepper_complete'),
		birthdayError: t('initial_survey_stepper_age_error')
	}

	const onError = (error) => {
		setError(error)
	}

	const onSubmit = () => {
		navigation.navigate('Dashboard')
	}

	return (
		<SurveyStepperScreen
			theme={theme}
			translations={translations}
			onSubmit={onSubmit}
			onError={onError}
		/>
	)
}

SurveyStepperScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func,
	}),
	setError: PropTypes.func,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = (dispatch) => ({
	setError: (error) => dispatch({ type: SET_ERROR, payload: error }),
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyStepperScreenWrapper)

