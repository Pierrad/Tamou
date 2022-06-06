import { Platform } from 'react-native'
import { API_URL, API_URL_ANDROID } from '@env'

export const postPreferences = async (payload) => {
	try {
		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/loves/setPreferences`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': payload.token,
			},
			body: JSON.stringify({
				orientation: payload.orientation,
				search: payload.search,
				mood: payload.mood,
				holiday: payload.holiday,
				smoke: payload.smoke,
				movie: payload.movie,
			})
		})

		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}

export const getPotentialMatch = async (payload) => {
	try {
		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/loves/getPotentialMatch`, {
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

export const postSwipe = async (payload) => {
	try {
		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/loves/swipe`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': payload.token,
			},
			body: JSON.stringify({
				like: payload.like,
				userId: payload.userId,
			})
		})
		
		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}