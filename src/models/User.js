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
		avatar: props.avatar,
		orientation: props.orientation,
		gender: props.gender,
		birthday: getAgeFromTimestamp(props.birthday),
		gameSection: props.gameSection,
	}
}