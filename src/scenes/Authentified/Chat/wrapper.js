import React, { useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import ChatScreen from './index'

const ChatScreenWrapper = (props) => {
	const { navigation, theme } = props
	const { t } = useTranslation()

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.goBack(),
		color: theme.backgroundInverted,
		colorInverted: theme.background,
		title: t('chat_screen_title'),
	}), [navigation, t, theme.background, theme.backgroundInverted])

	const translations = useMemo(() => ({
	}), [])

	const renderNotificationScreen = useCallback(() => (
		<ChatScreen
			headerData={headerData}	
			translations={translations}
		/>
	), [headerData, translations])


	return renderNotificationScreen()
}

ChatScreenWrapper.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreenWrapper)

