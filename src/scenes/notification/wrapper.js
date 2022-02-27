import React, { useMemo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import NotificationScreen from './index'

const NotificationScreenWrapper = (props) => {
	const { navigation, theme } = props

	const [notifications, setNotifications] = useState([
		{
			isNew: true,
			dateAgo: 'Il y a 2h',
			title: 'Vous avez reçu un nouveau message de John Doe',
		},
		{
			isNew: true,
			dateAgo: 'Il y a 3h',
			title: 'Vous avez reçu un nouveau match avec John Doe',
		},
		{
			isNew: false,
			dateAgo: 'Il y a 4h',
			title: 'N\'hésitez pas à découvrir de nouvelles catégories !',
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
		title: 'Notification',
	}), [navigation, theme])

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

