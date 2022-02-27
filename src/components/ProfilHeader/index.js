import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ProfilHeader = (props) => {
	const { style, avatar, name, location, onEditPress } = props

	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.Content>
				<SC.AvatarWrapper>
					<SC.Avatar
						source={{
							uri: avatar
						}}
					/>
					<SC.IconWrapper>
						<SC.EditIcon
							onPress={onEditPress}
							name="camera"
							size={24}
							color="#fff"
						/>
					</SC.IconWrapper>
				</SC.AvatarWrapper>
				<SC.Name>{name}</SC.Name>
				<SC.Location>{location}</SC.Location>
			</SC.Content>
		</SC.Container>
	)
}

ProfilHeader.propTypes = {
	style: PropTypes.array,
	avatar: PropTypes.string,
	name: PropTypes.string,
	location: PropTypes.string,
	onEditPress: PropTypes.func,
}

export default ProfilHeader