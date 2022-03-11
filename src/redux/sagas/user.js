import {
	call,
	put,
	takeLeading,
} from 'redux-saga/effects'
import * as Keychain from 'react-native-keychain'

import { POST_REGISTER, POST_LOGIN, START_LOADING, STOP_LOADING, CHECK_EXISTING_SESSION, SET_USER } from '../actions/user'
import { SET_ERROR } from '../actions/app'
import { register, login } from '../api/user'
import * as RootNavigation from '../../navigation/RootNavigation'
import { translateMessage } from '../../helpers/apiHelpers'


function* checkExistingSession() {
	const credentials = yield call(Keychain.getGenericPassword)
	if (credentials) {
		const authResponse = yield call(login, { email: credentials.username, password: credentials.password })
		if (authResponse.success === true) {
			yield put({ type: SET_USER, payload: authResponse.data.user })
			// RootNavigation.navigate('Dashboard')
		}
	}
}

function* registration({ payload }) {
	yield put({ type: START_LOADING })

	const authResponse = yield call(register, payload)

	if (authResponse.success === true) {
		yield put({ type: STOP_LOADING })
		yield put({ type: POST_REGISTER, payload: authResponse })
		RootNavigation.navigate('Login')
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}

function* connect({ payload }) {
	yield put({ type: START_LOADING })

	const authResponse = yield call(login, payload)

	if (authResponse.success === true) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_USER, payload: authResponse.data.user })
		yield call(Keychain.setGenericPassword, ...[payload.email, payload.password])
		RootNavigation.navigate('Dashboard')
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}


export default function* userSagas() {
	yield takeLeading(POST_REGISTER, registration)
	yield takeLeading(POST_LOGIN, connect)
	yield takeLeading(CHECK_EXISTING_SESSION, checkExistingSession)
}