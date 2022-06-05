import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { CHECK_EXISTING_SESSION } from '../../../redux/actions/user'

import LoveDashboardScreen from './index'

const LoveDashboardScreenWrapper = (props) => {
	const { theme, navigation, reloadUser, matches } = props
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
		})

		return listener
	}, [navigation, reloadUser])


	const matchsCard = useMemo(() => {
		return matches && matches.map((match) => {
			return {
				text: match.match,
				image: match.match.image,
				onPress: () => navigation.navigate('LoveProfile', { profile: match }),
			}
		})
	}, [matches, navigation])

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
	matches: PropTypes.array,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = (dispatch) => ({
	reloadUser: () => dispatch({ type: CHECK_EXISTING_SESSION }),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoveDashboardScreenWrapper)

