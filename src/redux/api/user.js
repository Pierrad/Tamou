import { Platform } from 'react-native'
import { API_URL, API_URL_ANDROID } from '@env'
const FormData = global.FormData
import { rankingIntegerTranslation } from '../../helpers/game'

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

export const uploadUserPicture = async (payload) => {
	try {
		const data = new FormData()
		data.append('file', payload.picture)
		console.log(data)
		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/users/profilePic`, {
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data; charset=utf-8;',
				'Authorization': payload.token,
			},
			body: data
		})

		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}

export const setGames = async (payload) => {
	try {
		const body = {
			game: payload.game,
			mood: payload.mood,
			...((payload.game === 'WOW' || payload.game === 'FORTNITE') && { level: payload.rank }),
			...((payload.game === 'LOL' || payload.game === 'VALORANT') && { rank: rankingIntegerTranslation[payload.rank] }),
			...(payload.game === 'COD' && { ratio: payload.rank }),
		}

		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/users/setGames`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': payload.token,
			},
			body: JSON.stringify(body)
		})

		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}
