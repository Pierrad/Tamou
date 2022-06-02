import {
	call,
	put,
	select,
	takeLeading,
} from 'redux-saga/effects'

import {  POST_INITIAL_GAME, SET_MATCHES, SET_MATCHES_INDEX, POST_SWIPE, SET_GET_MATCH_ERROR } from '../actions/game'
import { GET_PUBLIC_PROFILE, SET_PUBLIC_PROFILE } from '../actions/user'
import { SET_ERROR, SET_VALIDATION, START_LOADING, STOP_LOADING } from '../actions/app'
import { setGames, getMatches, sendSwipe } from '../api/game'
import * as gameSelectors from '../selectors/game'
import * as userSelectors from '../selectors/user'
import { PublicUser } from '../../models/PublicProfile'
import * as RootNavigation from '../../navigation/RootNavigation'

import { translateMessage } from '../../helpers/api'
import { getPublicProfile } from '../api/user'



function* postInitialGame({ payload }) {
	yield put({ type: START_LOADING })
	const user = yield select(userSelectors.user)

	const authResponse = yield call(setGames, { ...payload, token: user.token })

	if (authResponse.success === true) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_VALIDATION, payload: translateMessage(authResponse.data.message) })
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}

function* fetchPublicProfile({ payload }) {
	yield put({ type: START_LOADING })
	let matches = yield select(gameSelectors.matches)
	let currentGameMatchesIndex = yield select(gameSelectors.matchesIndex)
	const user = yield select(userSelectors.user)

	console.log(currentGameMatchesIndex)
	console.log(matches)

	if (matches === null || currentGameMatchesIndex === 0 || currentGameMatchesIndex === matches.length - 1 || matches.length === 0) {
		const res = yield call(getMatches, { ...payload, token: user.token })
		if (res.success === true) {
			matches = res.data.potentialMatch
			currentGameMatchesIndex = 0
			yield put({ type: SET_MATCHES_INDEX, payload: 0 })
			yield put({ type: SET_MATCHES, payload: matches })
		}
	}

	if (matches && currentGameMatchesIndex >= matches.length) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_GET_MATCH_ERROR, payload: true })
		console.log('no more matches')
		return
	}

	const newPayload = {
		...payload,
		token: user.token,
		id: matches ? matches[currentGameMatchesIndex]._id : '',
	}
	
	const authResponse = yield call(getPublicProfile, newPayload)

	if (authResponse.success === true) {
		yield put({ type: SET_MATCHES_INDEX, payload: currentGameMatchesIndex + 1 })
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_PUBLIC_PROFILE, payload: PublicUser(authResponse.data.user) })
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}

function* postSwipe({ payload }) {
	yield put({ type: START_LOADING })
	const potentialMatch = yield select(userSelectors.potentialMatchProfil)
	const user = yield select(userSelectors.user)

	const newPayload = {
		...payload,
		userId: potentialMatch.publicID,
		token: user.token
	}

	const authResponse = yield call(sendSwipe, newPayload)

	if (authResponse.success === true) {
		yield put({ type: STOP_LOADING })
		if (authResponse.data.match === true) {
			RootNavigation.navigate('Match', { category: 'game', match: potentialMatch })
		}
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}

export default function* gameSagas() {
	yield takeLeading(POST_INITIAL_GAME, postInitialGame)
	yield takeLeading(GET_PUBLIC_PROFILE, fetchPublicProfile)
	yield takeLeading(POST_SWIPE, postSwipe)
}