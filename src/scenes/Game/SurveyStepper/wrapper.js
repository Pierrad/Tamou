import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import SurveyStepperScreen from './index'

const SurveyStepperScreenWrapper = (props) => {
	const { theme, navigation } = props 
	const { t } = useTranslation()

	const researchToggles = [
		{
			text: 'COD',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'callOf',
		},
		{
			text: 'World of warraft',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'wow',
		},
		{
			text: 'League of Legends',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'lol',
		},
		{
			text: 'Fortnite',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'fortnte',
		},
		{
			text: 'Minecraft',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'minecraft',
		},
	]

	const typeOfNightToggles = [
		{
			text: 'Chill',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'chill',
		},
		{
			text: 'La win ou rien',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'win',
		},
		{
			text: 'Un gros rageux',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'rage',
		},
		
	]

	const holidayToggles = [
		{
			text: 'Ski à la montagne',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'mountain',
		},
		{
			text: 'Bronzette à la plage',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'beach',
		},
		{
			text: 'Rando en forêt',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'forest',
		},
		{
			text: 'Chill à la maison',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'house',
		},
	]

	const smokeToggles = [
		{
			text: 'Redibitoire',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'noSmoke',
		},
		{
			text: 'Pas de soucis',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'smoke',
		},
	]

	const movieToggles = [
		{
			text: 'Titanic',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'titanic',
		},
		{
			text: 'Lalaland',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'lalaland',
		},
		{
			text: 'Fast and Furious',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'ff',
		},
		{
			text: 'Avengers',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'avengers',
		},
		{
			text: 'Raiponse',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'raiponse',
		},
		{
			text: '50 shades of grey 😏',
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'shades',
		},
	]

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.goBack(),
		color: theme.background,
		colorInverted: theme.backgroundInverted,
		title: t('love_survey_stepper_title'),
	}), [navigation, t, theme.background, theme.backgroundInverted])

	return (
		<SurveyStepperScreen
			navigation={navigation}
			headerData={headerData}
			researchToggles={researchToggles}
			typeOfNightToggles={typeOfNightToggles}
			holidayToggles={holidayToggles}
			smokeToggles={smokeToggles}
			movieToggles={movieToggles}
		/>
	)
}

SurveyStepperScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyStepperScreenWrapper)

