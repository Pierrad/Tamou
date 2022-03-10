import React, { useMemo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import NotificationScreen from './index'

const NotificationScreenWrapper = (props) => {
	const { navigation, theme } = props
	const { t } = useTranslation()

	const [notifications, setNotifications] = useState([
		{
			isNew: true,
			dateAgo: t('notification_screen_new_notification_date_ago', { time: '2h' }),
			title: t('notification_screen_new_message_from', { name: 'John Doe' }),
		},
		{
			isNew: true,
			dateAgo: t('notification_screen_new_notification_date_ago', { time: '3h' }),
			title: t('notification_screen_new_match_with', { name: 'John Doe' }),
		},
		{
			isNew: false,
			dateAgo: t('notification_screen_new_notification_date_ago', { time: '4h' }),
			title: t('notification_screen_push_discover_category'),
		},
	])

	const onDeletePress = useCallback((id) => {
		const newNotifications = notifications.filter((item, i) => i !== id)
		setNotifications(newNotifications)
	}, [notifications])

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.goBack(),
		color: theme.backgroundInverted,
		colorInverted: theme.background,
		title: t('notification_screen_title'),
	}), [navigation, t, theme.background, theme.backgroundInverted])

	const renderNotificationScreen = useCallback(() => (
		<NotificationScreen
			headerData={headerData}	
			notifications={notifications}
			onDelete={onDeletePress}
		/>
	), [headerData, notifications, onDeletePress])


	return renderNotificationScreen()
}

NotificationScreenWrapper.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NotificationScreenWrapper)

