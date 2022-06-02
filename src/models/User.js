import { Platform } from 'react-native'
import { API_URL_ANDROID, APP_ENV } from '@env'

import { getAgeFromTimestamp } from '../helpers/date'

export const User = (props) => {
	return {
		id: props._id,
		publicID: props.publicId,
		token: props.token.token,
		firstname: props.firstname,
		lastname: props.lastname,
		email: props.email,
		username: props.username,
		image: props.imageProfile,
		avatar: Platform.OS === 'ios'
			? props.imageProfile
			: APP_ENV === 'local'
				? `${API_URL_ANDROID}/images/${props.imageProfile.split('/').pop()}`
				: props.imageProfile,
		orientation: props.orientation,
		gender: props.gender,
		tagline: props.tagline,
		birthday: getAgeFromTimestamp(props.birthday),
		gameSection: props.gameSection,
		loveSection: props.loveSection,
		notifications: props.notifications || [],
	}
}