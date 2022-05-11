import React, { useCallback, useMemo, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import SurveyStepperScreen from './index'
import { games, typeOfPlayer, ranking } from './config'
import { POST_INITIAL_GAME } from '../../../redux/actions/user'

const SurveyStepperScreenWrapper = (props) => {
	const { theme, navigation, onSubmit, user } = props 
	const { t } = useTranslation()

	const translations = {
		rankPlaceholder: t('rank_placeholder'),
	}

	const [step, setStep] = useState(0)
	const [gameInput, setGameInput] = useState('')
	const [rankingInput, setRankingInput] = useState('')
	const [typeOfPlayerInput, setTypeOfPlayerInput] = useState('')

	const gamesToggles = games(theme)
	const rankingToggles = ranking(gameInput, theme)
	const typeOfPlayerToggles = typeOfPlayer(theme)

	const nextStep = useCallback(() => {
		if (gameInput === 'MINECRAFT' && step === 0) {
			setStep(2)
		} else {
			setStep(step + 1)
		}
	}, [gameInput, step])

	const onGamePress = useCallback((value) => {
		setGameInput(value)
	}, [])

	const onRankingPress = useCallback((value) => {
		setRankingInput(value)
	}, [])

	const onTypeOfPlayerPress = useCallback((value) => {
		setTypeOfPlayerInput(value)
	}, [])

	const submit = useCallback(() => {
		onSubmit({
			game: gameInput,
			mood: typeOfPlayerInput,
			rank: rankingInput,
			token: user.token.token,
		})
		nextStep()
	}, [gameInput, nextStep, onSubmit, rankingInput, typeOfPlayerInput, user.token])

	const goToDashboard = useCallback(() => {
		navigation.navigate('GameDashboard')
	}, [navigation])

	const headerData = useMemo(() => ({
		onButtonPress: () => {
			if (step > 0 && gameInput !== 'MINECRAFT') {
				setStep(step - 1)
			} else if (step > 0 && gameInput === 'MINECRAFT') {
				setStep(step - 2)
			} else {
				navigation.goBack()
			} 
		},
		color: theme.background,
		colorInverted: theme.backgroundInverted,
		title: t('love_survey_stepper_title'),
	}), [gameInput, navigation, step, t, theme.background, theme.backgroundInverted])

	return (
		<SurveyStepperScreen
			translations={translations}
			headerData={headerData}
			nextStep={nextStep}
			step={step}
			onSubmit={submit}
			onGamePress={onGamePress}
			gamesToggles={gamesToggles}
			game={gameInput}
			onTypeOfPlayerPress={onTypeOfPlayerPress}
			typeOfPlayerToggles={typeOfPlayerToggles}
			typeOfPlayer={typeOfPlayerInput}
			rankingToggles={rankingToggles}
			onRankingPress={onRankingPress}
			ranking={rankingInput}
			goToDashboard={goToDashboard}
		/>
	)
}

SurveyStepperScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	onSubmit: PropTypes.func,
	user: PropTypes.shape({
		token: PropTypes.shape({
			token: PropTypes.string,
		}),
	}),
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (input) => dispatch({ type: POST_INITIAL_GAME, payload: input }),
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyStepperScreenWrapper)

