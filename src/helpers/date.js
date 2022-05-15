export const isBirthdayIsValid = (birthday) => {
	const today = new Date()
	let age = today.getFullYear() - birthday.getFullYear()
	const month = today.getMonth() - birthday.getMonth()
	if (month < 0 || (month === 0 && today.getDate() < birthday.getDate()))   {
		age--
	}
	if (age < 18) {
		return false
	}
	return true
}

export const getAgeFromTimestamp = (timestamp) => {
	return parseInt(((new Date()).getTime() - timestamp) / (1000 * 60 * 60 * 24 * 365))
}
