import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import SurveyStepperScreen from './index'
import { SET_PREFERENCES } from '../../../redux/actions/love'

const SurveyStepperScreenWrapper = (props) => {
	const { theme, navigation, sendPreferences } = props 
	const { t } = useTranslation()

	const researchToggles = [
		{
			text: t('love_profile_search_love'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'love',
		},
		{
			text: t('love_profile_search_life'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'life',
		},
		{
			text: t('love_profile_search_night'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'night',
		},
	]

	const typeOfNightToggles = [
		{
			text: t('love_profile_mood_netflix'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'netflix',
		},
		{
			text: t('love_profile_mood_nightclub'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'nightclub',
		},
		{
			text: t('love_profile_mood_friend'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'friend',
		},
		{
			text: t('love_profile_mood_love'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'love',
		},
	]

	const holidayToggles = [
		{
			text: t('love_profile_holiday_mountain'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'mountain',
		},
		{
			text: t('love_profile_holiday_beach'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'beach',
		},
		{
			text: t('love_profile_holiday_forest'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'forest',
		},
		{
			text: t('love_profile_holiday_house'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'house',
		},
	]

	const smokeToggles = [
		{
			text: t('love_profile_smoke_yes'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'yes',
		},
		{
			text: t('love_profile_smoke_no'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'no',
		},
	]

	const movieToggles = [
		{
			text: t('love_profile_movie_titanic'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'titanic',
		},
		{
			text: t('love_profile_movie_lalaland'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'lalaland',
		},
		{
			text: t('love_profile_movie_faf'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'faf',
		},
		{
			text: t('love_profile_movie_avengers'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'avengers',
		},
		{
			text: t('love_profile_movie_raiponse'),
			backgroundSelectedColor: theme.pureBlack,
			textColor: theme.pureWhite,
			value: 'raiponse',
		},
		{
			text: t('love_profile_movie_shades'),
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
			sendPreferences={sendPreferences}
		/>
	)
}

SurveyStepperScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	sendPreferences: PropTypes.func,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = (dispatch) => ({
	sendPreferences: (preferences) => dispatch({ type: SET_PREFERENCES, payload: preferences }),
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyStepperScreenWrapper)

