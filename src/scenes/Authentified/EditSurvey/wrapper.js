import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { SET_PREFERENCES } from '../../../redux/actions/love'

import EditSurvey from './index'
import { questionsMock } from './mocks'

const EditSurveyWrapper = (props) => {
	const { theme, navigation, route, user, setPreferences } = props
	const { category } = route.params
	const { t } = useTranslation()
	const [questions, setQuestions] = useState(questionsMock(user.loveSection))

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.goBack(),
		title: t('edit_survey_header_title'),
		color: theme.backgroundInverted,
		colorInverted: theme.background,        
	}), [navigation, t, theme])

	const onToggle = (id, value) => {
		setQuestions(questions.map(question => {
			if (question.id === 0 && id === 0) {
				if (question.value.includes(value)) {
					question.value.splice(question.value.indexOf(value), 1)
				}	else {
					question.value.push(value)
				}
			} else if (question.id === id && question.id !== 0) {
				question.value = value
			}
			return question
		}))
	}

	const submitSurvey = () => {
		console.log(questions[0].value)
		setPreferences({
			orientation: questions[0].value.length > 1 ? 'mf' : questions[0].value[0],
			search: questions[1].value,
			mood: questions[2].value,
			holiday: questions[3].value,
			smoke: questions[4].value,
			movie: questions[5].value,
		})
	}

	return (
		<EditSurvey
			headerData={headerData}
			theme={theme}
			color={theme[category]}
			onSubmit={submitSurvey}
			questions={questions}
			onToggle={onToggle}
		/>
	)
}

EditSurveyWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	route: PropTypes.object,
	user: PropTypes.object,
	setPreferences: PropTypes.func,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = (dispatch) => ({
	setPreferences: (preferences) => dispatch({ type: SET_PREFERENCES, payload: preferences }),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditSurveyWrapper)

