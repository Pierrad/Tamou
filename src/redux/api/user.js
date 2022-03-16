import { Platform } from 'react-native'
import { API_URL, API_URL_ANDROID } from '@env'

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
				firstname: payload.firstname,
				lastname: payload.lastname
			})
		})

		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}

export const login = async (payload) => {
	try {
		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/users/login`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: payload.email,
				password: payload.password,
			})
		})

		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}

export const requestPasswordChange = async (payload) => {
	try {
		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/users/forgetPassword`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: payload.email,
			})
		})

		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}

export const resetPassword = async (payload) => {
	try {
		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/users/resetPassword`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				otp: payload.code,
				password: payload.password,
			})
		})

		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}
