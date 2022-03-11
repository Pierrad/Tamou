import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import SwipeScreen from './index'

const SwipeScreenWrapper = (props) => {
	const { theme, navigation } = props 
	const { t } = useTranslation()

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.goBack(),
		color: theme.backgroundInverted,
		colorInverted: theme.background,
		title: t('love_swipe_title'),
	}), [navigation, t, theme.background, theme.backgroundInverted])


	return (
		<SwipeScreen 
			headerData={headerData}
		/>
	)
}

SwipeScreenWrapper.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SwipeScreenWrapper)

