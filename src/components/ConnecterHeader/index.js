import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ConnectedHeader = (props) => {
	const { style, theme, title, onSettingsPress, onNotificationPress, numberOfNotification, onAvatarPress, avatar, onParametersPress } = props
	return (
		<SC.Container style={style}>
			<SC.Content>
				<SC.SettingsIcon
					onPress={onSettingsPress}
					name="settings"
					size={24} 
					color={theme.backgroundInverted}
				/>
				<SC.Title>{title}</SC.Title>
			</SC.Content>
			{onNotificationPress && numberOfNotification && onAvatarPress && avatar && (
				<SC.Content>
					<SC.Notification>
						<SC.Icon
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
			)}
			{onParametersPress && (
				<SC.Content>
					<SC.Icon
						onPress={onParametersPress}
						name="settings-outline"
						size={24} 
						color={theme.backgroundInverted}
					/>
				</SC.Content>
			)}
		</SC.Container>
	)}

ConnectedHeader.propTypes = {
	style: PropTypes.array,
	theme: PropTypes.object,
	title: PropTypes.string,
	onSettingsPress: PropTypes.func,
	onNotificationPress: PropTypes.func,
	numberOfNotification: PropTypes.number,
	onAvatarPress: PropTypes.func,
	avatar: PropTypes.string,
	onParametersPress: PropTypes.func,
}

export default ConnectedHeader


