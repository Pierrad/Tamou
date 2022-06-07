import { Platform } from 'react-native'
import { API_URL, API_URL_ANDROID } from '@env'
import RNFetchBlob from 'rn-fetch-blob'

import { getTimestampFromBirthday } from '../../helpers/date'

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
				lastname: payload.lastname,
				birthday: getTimestampFromBirthday(payload.birthday),
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

export const deleteAccount = async (payload) => {
	try {
		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/users/deleteProfile`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': payload.token,
			},
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
		const res = await RNFetchBlob.fetch('POST', `${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/users/profilePic`, {
			'Content-Type': 'multipart/form-data,octet-stream',
			'Authorization': payload.token,
		}, [
			{ name: 'file', filename: payload.picture.name, data: RNFetchBlob.wrap(payload.picture.uri) },
		])
		
		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}

export const getPublicProfile = async (payload) => {
	try {
		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/users/public/${payload.id}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': payload.token,
			},
		})

		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}

export const getMultiplePublicProfile = async (payload) => {
	try {
		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/users/public/multiple`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': payload.token,
			},
			body: JSON.stringify({
				publicIds: payload.publicIds,
			}),
		})

		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}

export const deleteNotification = async (payload) => {
	try {
		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/users/notif/${payload.id}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': payload.token,
			},
		})

		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}

export const editUser = async (payload) => {
	try {
		const content = JSON.stringify({
			...(payload.orientation && { orientation: payload.orientation }),
			...(payload.gender && { gender: payload.gender }),
			...(payload.tagline && { tagline: payload.tagline }),
			...(payload.loveSection && { loveSection: payload.loveSection }),
			...(payload.gameSection && { gameSection: payload.gameSection })
		})

		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/users/edit`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': payload.token,
			},
			body: content,
		})

		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}