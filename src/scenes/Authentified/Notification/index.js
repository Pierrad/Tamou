import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const NotificationScreen = ({ headerData, notifications, onDelete }) => {

	return (
		<SC.Container>
			<SC.Wrapper>
				<SC.Content>
					<SC.Header {...headerData} />
				</SC.Content>
				<SC.Content>
					{notifications.map((notification, index) => (
						<SC.Notification key={index} id={index} {...notification} onDelete={onDelete} />
					))}
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
	notifications: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		isNew: PropTypes.bool,
		dateAgo: PropTypes.string,
	})),
	onDelete: PropTypes.func,
}

export default NotificationScreen