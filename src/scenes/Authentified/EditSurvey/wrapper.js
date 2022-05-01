import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import EditSurvey from './index'
import { questionsMock } from './mocks'

const EditSurveyWrapper = (props) => {
	const { theme, navigation, route } = props
	const { category } = route.params
	const { t } = useTranslation()
	const [questions, setQuestions] = useState(questionsMock)

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.goBack(),
		title: t('edit_survey_header_title'),
		color: theme.backgroundInverted,
		colorInverted: theme.background,        
	}), [navigation, t, theme])

	const onToggle = (id, value) => {
		setQuestions(questions.map(question => {
			if (question.id === id) {
				question.value = value
			}
			return question
		}))
	}

	const submitSurvey = () => {
		console.log('submitSurvey')
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
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(EditSurveyWrapper)

