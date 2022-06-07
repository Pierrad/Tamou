import {
	call,
	put,
	select,
	takeLeading,
} from 'redux-saga/effects'

import { POST_LOVE_SWIPE, SET_LOVE_GET_MATCH_ERROR, SET_LOVE_MATCHES, SET_LOVE_MATCHES_INDEX, SET_PREFERENCES } from '../actions/love'
import { SET_ERROR, SET_VALIDATION, START_LOADING, STOP_LOADING } from '../actions/app'
import { GET_LOVE_PUBLIC_PROFILE, SET_PUBLIC_PROFILE } from '../actions/user'
import { postPreferences, getPotentialMatch, postSwipe } from '../api/love'
import { getPublicProfile } from '../api/user'
import { PublicUser } from '../../models/PublicProfile'
import * as userSelectors from '../selectors/user'
import * as loveSelectors from '../selectors/love'
import * as RootNavigation from '../../helpers/navigation'

import { translateMessage } from '../../helpers/api'


function* setPreferences({ payload }) {
	yield put({ type: START_LOADING })
	const user = yield select(userSelectors.user)

	const authResponse = yield call(postPreferences, { ...payload, token: user.token })

	if (authResponse.success === true) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_VALIDATION, payload: translateMessage(authResponse.data.message) })
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}

function* fetchPotentialMatches() {
	yield put({ type: START_LOADING })
	let matches = yield select(loveSelectors.matches)
	let currentGameMatchesIndex = yield select(loveSelectors.matchesIndex)
	const user = yield select(userSelectors.user)

	if (matches === null || currentGameMatchesIndex === 0 || currentGameMatchesIndex === matches.length - 1 || matches.length === 0) {
		const res = yield call(getPotentialMatch, { token: user.token })
		if (res.success === true) {
			matches = res.data.potentialMatch
			currentGameMatchesIndex = 0
			yield put({ type: SET_LOVE_MATCHES_INDEX, payload: 0 })
			yield put({ type: SET_LOVE_MATCHES, payload: matches })
		}
	}

	if (matches && currentGameMatchesIndex >= matches.length) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_LOVE_GET_MATCH_ERROR, payload: true })
		return
	}

	const newPayload = {
		token: user.token,
		id: matches ? matches[currentGameMatchesIndex]._id : '',
	}
	
	const authResponse = yield call(getPublicProfile, newPayload)

	if (authResponse.success === true) {
		yield put({ type: SET_LOVE_MATCHES_INDEX, payload: currentGameMatchesIndex + 1 })
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_PUBLIC_PROFILE, payload: PublicUser(authResponse.data.user) })
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
	
}

function* swipe({ payload }) {
	yield put({ type: START_LOADING })
	const potentialMatch = yield select(userSelectors.potentialMatchProfil)
	const user = yield select(userSelectors.user)

	const newPayload = {
		...payload,
		userId: potentialMatch.publicID,
		token: user.token
	}

	const authResponse = yield call(postSwipe, newPayload)

	if (authResponse.success === true) {
		yield put({ type: STOP_LOADING })
		if (authResponse.data.match === true) {
			RootNavigation.navigate('Match', { category: 'love', match: potentialMatch })
		}
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
} 


export default function* gameSagas() {
	yield takeLeading(SET_PREFERENCES, setPreferences)
	yield takeLeading(GET_LOVE_PUBLIC_PROFILE, fetchPotentialMatches)
	yield takeLeading(POST_LOVE_SWIPE, swipe)
}