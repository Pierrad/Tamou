import React, { useMemo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import NotificationScreen from './index'
import { DELETE_NOTIFICATION } from '../../../redux/actions/user'

const NotificationScreenWrapper = (props) => {
	const { navigation, theme, user, deleteNotification } = props
	const { t } = useTranslation()

	const [notifications, setNotifications] = useState(user.notifications)

	const onDeletePress = useCallback((id) => {
		const newNotifications = notifications.filter((item) => item.id !== id)
		setNotifications(newNotifications)
		deleteNotification(id)
	}, [deleteNotification, notifications])

	const headerData = useMemo(() => ({
		onButtonPress: () => navigation.goBack(),
		color: theme.backgroundInverted,
		colorInverted: theme.background,
		title: t('notification_screen_title'),
	}), [navigation, t, theme.background, theme.backgroundInverted])

	const translations = useMemo(() => ({
		noNotifications: t('notification_screen_no_notifications'),
	}), [t])

	const renderNotificationScreen = useCallback(() => (
		<NotificationScreen
			headerData={headerData}	
			translations={translations}
			notifications={notifications}
			onDelete={onDeletePress}
		/>
	), [headerData, notifications, onDeletePress, translations])


	return renderNotificationScreen()
}

NotificationScreenWrapper.propTypes = {
	theme: PropTypes.object,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	user: PropTypes.shape({
		notifications: PropTypes.array,
	}),
	deleteNotification: PropTypes.func,
}

const mapStateToProps = (state) => ({
	theme: state.themeReducer.theme,
	user: state.userReducer.user,
})

const mapDispatchToProps = (dispatch) => ({
	deleteNotification: (id) => dispatch({ type: DELETE_NOTIFICATION, payload: { id } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationScreenWrapper)

