import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const NotificationScreen = ({ headerData, translations, notifications, onDelete,  }) => {

	console.log(notifications)

	return (
		<SC.Container>
			<SC.Wrapper>
				<SC.Content>
					<SC.Header {...headerData} />
				</SC.Content>
				<SC.Content>
					{notifications.length !== 0 ? notifications.map((notification, index) => (
						<SC.Notification key={index} {...notification} onDelete={onDelete} />
					))
						: (
							<SC.EmptyNotification>
								{translations.noNotifications}
							</SC.EmptyNotification>
						)}
				</SC.Content>
			</SC.Wrapper>
		</SC.Container>
	)
}

NotificationScreen.propTypes = {
	headerData: PropTypes.shape({
		onButtonPress: PropTypes.func,
		color: PropTypes.string,
		colorInverted: PropTypes.string,
		title: PropTypes.string,
		onDotPress: PropTypes.func,
	}),
	translations: PropTypes.object,
	notifications: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		isNew: PropTypes.bool,
		dateAgo: PropTypes.string,
	})),
	onDelete: PropTypes.func,
}

export default NotificationScreen