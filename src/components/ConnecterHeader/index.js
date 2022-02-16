import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ConnectedHeader = ({ onBurgerPress, title, onNotificationPress, numberOfNotification, onAvatarPress, avatar }) => (
	<SC.Container>
		<SC.Content>
			<SC.BurgerIcon
				onPress={onBurgerPress}
			/>
			<SC.Title>{title}</SC.Title>
		</SC.Content>
		<SC.Content>
			<SC.NotificationIcon
				onPress={onNotificationPress}
			/>
			<SC.NotificationNumber>{numberOfNotification}</SC.NotificationNumber>
			<SC.AvatarWrapper>
				<SC.Avatar
					onPress={onAvatarPress} 
					source={{
						uri: avatar,
					}}
				/>
			</SC.AvatarWrapper>

		</SC.Content>

	</SC.Container>
)

ConnectedHeader.propTypes = {
	title: PropTypes.string,
	onBurgerPress: PropTypes.func,
	onNotificationPress: PropTypes.func,
	numberOfNotification: PropTypes.number,
	onAvatarPress: PropTypes.func,
	avatar: PropTypes.string,
}

export default ConnectedHeader


