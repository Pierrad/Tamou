import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ConnectedHeader = (props) => {
	const { style, theme, title, onBurgerPress, onNotificationPress, numberOfNotification, onAvatarPress, avatar } = props
	return (
		<SC.Container style={style}>
			<SC.Content>
				<SC.Burger
					onPress={onBurgerPress}
					name="menu"
					size={24} 
					color={theme.backgroundInverted}
				/>
				<SC.Title>{title}</SC.Title>
			</SC.Content>
			<SC.Content>
				<SC.Notification>
					<SC.NotificationI
						onPress={onNotificationPress}
						name="notifications"
						size={24} 
						color={theme.backgroundInverted}
					/>
					{numberOfNotification > 0 && (
						<SC.NotificationNumberWrap>
							<SC.NotificationNumber>{numberOfNotification}</SC.NotificationNumber>
						</SC.NotificationNumberWrap>
					)}
				</SC.Notification>
				<SC.AvatarWrapper onPress={onAvatarPress} >
					<SC.Avatar
						source={{
							uri: avatar,
						}}
					/>
				</SC.AvatarWrapper>
			</SC.Content>
		</SC.Container>
	)}

ConnectedHeader.propTypes = {
	style: PropTypes.array,
	theme: PropTypes.object,
	title: PropTypes.string,
	onBurgerPress: PropTypes.func,
	onNotificationPress: PropTypes.func,
	numberOfNotification: PropTypes.number,
	onAvatarPress: PropTypes.func,
	avatar: PropTypes.string,
}

export default ConnectedHeader


