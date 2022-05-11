import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const SurveyStepperScreen = (props) => {
	const {
		translations,
		headerData,
		nextStep,
		onSubmit,
		step,
		gamesToggles,
		onGamePress,
		game,
		typeOfPlayerToggles,
		onTypeOfPlayerPress,
		typeOfPlayer,
		rankingToggles,
		onRankingPress,
		ranking,
		goToDashboard,
	} = props


	const renderStep = useCallback((step) => {
		switch (step) {
		case 0:
			return <SC.ToggleButtonListContainer
				onArrowPress={game.length ? nextStep : null}
				title="Je joue à..."
				onPress={onGamePress}
				values={game}
				toggles={gamesToggles}
			/>
		case 1:
			return !rankingToggles?.text
				? (
					<SC.ToggleButtonListContainer
						onArrowPress={ranking.length ? nextStep : null}
						title={translations.rankPlaceholder}
						onPress={onRankingPress}
						values={ranking}
						toggles={rankingToggles}
					/>
				)
				: (
					<SC.Input
						onArrowPress={ranking.length ? nextStep : null}
						title={translations.rankPlaceholder}
						value={ranking}
						onInputChange={onRankingPress}
					/>
				)
		case 2:
			return <SC.ToggleButtonListContainer
				onArrowPress={typeOfPlayer.length ? onSubmit : null}
				title="Je suis plutôt..."
				onPress={onTypeOfPlayerPress}
				values={typeOfPlayer}
				toggles={typeOfPlayerToggles}
			/>
		case 3:
			return <SC.ValidateSurveyContainer
				onArrowPress={goToDashboard}
			/>
		default:
			return null
		}
	}, [game, nextStep, onGamePress, gamesToggles, rankingToggles, ranking, translations.rankPlaceholder, onRankingPress, typeOfPlayer, onSubmit, onTypeOfPlayerPress, typeOfPlayerToggles, goToDashboard])

	return (
		<SC.Container>
			<SC.Header {...headerData} />
			{renderStep(step)}
		</SC.Container>
	)
}

SurveyStepperScreen.propTypes = {
	translations: PropTypes.objectOf(PropTypes.string),
	headerData: PropTypes.shape({
		onButtonPress: PropTypes.func,
		color: PropTypes.string,
		colorInverted: PropTypes.string,
		title: PropTypes.string,
		onDotPress: PropTypes.func,
	}),
	step: PropTypes.number,
	gamesToggles: PropTypes.array,
	onGamePress: PropTypes.func,
	game: PropTypes.string,
	typeOfPlayerToggles: PropTypes.array,
	onTypeOfPlayerPress: PropTypes.func,
	typeOfPlayer: PropTypes.string,
	rankingToggles: PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
	onRankingPress: PropTypes.func,
	ranking: PropTypes.string,
	nextStep: PropTypes.func,
	onSubmit: PropTypes.func,
	goToDashboard: PropTypes.func,
}

export default SurveyStepperScreen