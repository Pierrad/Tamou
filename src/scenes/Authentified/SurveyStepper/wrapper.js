import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import SurveyStepperScreen from './index'

const SurveyStepperScreenWrapper = (props) => {
	const { theme, navigation } = props 
	const { t } = useTranslation()

	const translations = {
		genderTitle: t('initial_survey_stepper_gender_title'),
		ageMaleTitle: t('initial_survey_stepper_age_male_title'),
		ageFemaleTitle: t('initial_survey_stepper_age_female_title'),
		categoriesTitle: t('initial_survey_stepper_choose_categories_title'),
		completeTitle: t('initial_survey_stepper_complete'),
	}

	return (
		<SurveyStepperScreen
			theme={theme}
			navigation={navigation}
			translations={translations}
		/>
	)
}

SurveyStepperScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyStepperScreenWrapper)

