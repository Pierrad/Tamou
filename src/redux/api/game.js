import { Platform } from 'react-native'
import { API_URL, API_URL_ANDROID } from '@env'
import { rankingIntegerTranslation } from '../../helpers/game'


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


export const getMatches = async (payload) => {
	try {
		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/games/match`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': payload.token,
			},
			body: JSON.stringify({
				games: payload.games,
			})
		})
		
		const json = await res.json()
		return json
	} catch(err) {
		return {error: true, message: err?.response?.data?.message || 'Internal error'}
	}
}

export const sendSwipe = async (payload) => {
	try {
		console.log('userID API', payload.userId)

		const res = await fetch(`${Platform.OS === 'ios' ? API_URL : API_URL_ANDROID}/users/swipe`, {
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