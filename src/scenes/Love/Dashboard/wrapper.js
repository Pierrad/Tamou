import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { CHECK_EXISTING_SESSION, GET_MULTIPLE_PARTNERS, RESET_PUBLIC_PROFILE } from '../../../redux/actions/user'

import LoveDashboardScreen from './index'

const LoveDashboardScreenWrapper = (props) => {
	const { theme, navigation, reloadUser, user, partners, fetchPartners, resetPublicProfile } = props
	const { t } = useTranslation()

	const translations = {
		title: t('love_dashboard_title'),
		subtitle: t('love_dashboard_subtitle'),
		cta: t('love_dashboard_cta_swipe'),
		noMatches: t('love_dashboard_no_matches'),
	}

	useEffect(() => {
		const listener = navigation.addListener('focus', () => {
			reloadUser()
			resetPublicProfile()
		})

		return listener
	}, [navigation, reloadUser, resetPublicProfile])

	useEffect(() => {
		fetchPartners({
			publicIds: user.loveSection.matchs.map((match) => match.id),
		})
	}, [fetchPartners, user.gameSection, user.loveSection.matchs])

	const matchsCard = useMemo(() => {
		return partners && partners.map((match) => {
			return {
				text: match.username,
				image: match.avatar,
				onPress: () => navigation.navigate('LoveProfile', { profile: match }),
			}
		})
	}, [navigation, partners])

	const handleButtonPress = () => {
		navigation.navigate('LoveSwipe')
	}

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.navigate('Dashboard'),
		title: translations.title,
		leftIconName: 'chevron-left',
		onParametersPress: () => navigation.navigate('EditSurvey', { category: 'love' }),
		theme: theme
	}), [navigation, theme, translations.title])

	return (
		<LoveDashboardScreen
			theme={theme}
			headerData={headerData}
			translations={translations}
			onButtonPress={handleButtonPress}
			profiles={matchsCard}
		/>
	)
}

LoveDashboardScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
		addListener: PropTypes.func.isRequired,
	}).isRequired,
	reloadUser: PropTypes.func,
	user: PropTypes.object,
	partners: PropTypes.array,
	fetchPartners: PropTypes.func,
	resetPublicProfile: PropTypes.func,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
	partners: state.userReducer.partners,
})

const mapDispatchToProps = (dispatch) => ({
	reloadUser: () => dispatch({ type: CHECK_EXISTING_SESSION }),
	resetPublicProfile: () => dispatch({ type: RESET_PUBLIC_PROFILE }),
	fetchPartners: (input) => dispatch({ type: GET_MULTIPLE_PARTNERS, payload: input }),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoveDashboardScreenWrapper)

