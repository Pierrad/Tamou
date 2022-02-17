import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ConnectedHeader = (props) => {
	const { style, theme, title, onBurgerPress, onNotificationPress, numberOfNotification, onAvatarPress, avatar } = props
	return (
		<SC.Container style={style}>
			<SC.Content>
				{theme.mode === 'light' ? (
					<SC.BurgerIcon
						onPress={onBurgerPress}
					/>
				) : (
					<SC.BurgerWhiteIcon
						onPress={onBurgerPress}
					/>
				)}
				<SC.Title>{title}</SC.Title>
			</SC.Content>
			<SC.Content>
				<SC.Notification>
					{theme.mode === 'light' ? (
						<SC.NotificationIcon
							onPress={onNotificationPress}
						/>
					) : (
						<SC.NotificationWhiteIcon
							onPress={onNotificationPress}
						/>
					)}

					{numberOfNotification > 0 && (
						<SC.NotificationNumberWrap>
							<SC.NotificationNumber>{numberOfNotification}</SC.NotificationNumber>
						</SC.NotificationNumberWrap>
					)}
				</SC.Notification>
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


