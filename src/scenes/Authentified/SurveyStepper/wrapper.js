import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { SET_ERROR } from '../../../redux/actions/app'
import { EDIT_USER } from '../../../redux/actions/user'

import SurveyStepperScreen from './index'

const SurveyStepperScreenWrapper = (props) => {
	const { theme, navigation, setError, route, user, editUser } = props
	const step = route.params?.step ?? 0
	const { t } = useTranslation()
	const categoriesAlreadySelected = []

	const translations = {
		genderTitle: t('initial_survey_stepper_gender_title'),
		ageMaleTitle: t('initial_survey_stepper_age_male_title'),
		ageFemaleTitle: t('initial_survey_stepper_age_female_title'),
		categoriesTitle: t('initial_survey_stepper_choose_categories_title'),
		completeTitle: t('initial_survey_stepper_complete'),
		taglineTitle: t('initial_survey_stepper_tagline_title'),
	}

	if (user && user.gameSection) {
		categoriesAlreadySelected.push('game')
	}
	if (user && user.loveSection) {
		categoriesAlreadySelected.push('love')
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
			artificialStep={step}
			categoriesAlreadySelected={categoriesAlreadySelected}
			handleEditUser={editUser}
		/>
	)
}

SurveyStepperScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func,
		replace: PropTypes.func,
	}),
	setError: PropTypes.func,
	route: PropTypes.object,
	user: PropTypes.object,
	editUser: PropTypes.func,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = (dispatch) => ({
	setError: (error) => dispatch({ type: SET_ERROR, payload: error }),
	editUser: (user) => dispatch({ type: EDIT_USER, payload: user }),
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyStepperScreenWrapper)

