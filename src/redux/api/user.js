import { Platform } from 'react-native'
import { API_URL, API_URL_ANDROID } from '@env'


// Registration
export const register = async (payload) => {
	try {
		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/users/register`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: payload.email,
				password: payload.password,
				username: payload.username,
			})
		})

		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}
