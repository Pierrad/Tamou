export const User = (props) => {
	return {
		firstname: props.firstname,
		lastname: props.lastname,
		username: props.username,
		image: props.imageProfile,
		orientation: props.orientation,
		gender: props.gender,
		publicID: props.publicId,
	}
}