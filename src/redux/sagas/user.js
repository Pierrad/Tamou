import {
	call,
	put,
	takeLeading,
} from 'redux-saga/effects'
import * as Keychain from 'react-native-keychain'

import { POST_REGISTER, POST_LOGIN, CHECK_EXISTING_SESSION, SET_USER, POST_REQUEST_PASSWORD_CHANGE, POST_RESET_PASSWORD } from '../actions/user'
import { INCREMENT_STEP, RESET_STEP, SET_ERROR, SET_VALIDATION, START_LOADING, STOP_LOADING } from '../actions/app'
import { register, login, requestPasswordChange, resetPassword } from '../api/user'
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

function* requestPasswordCode({ payload }) {
	yield put({ type: START_LOADING })

	const authResponse = yield call(requestPasswordChange, payload)

	if (authResponse.success === true) {
		yield put({ type: STOP_LOADING })
		yield put({ type: INCREMENT_STEP })
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}

function* resetPasswordSaga({ payload }) {
	yield put({ type: START_LOADING })

	const authResponse = yield call(resetPassword, payload)

	if (authResponse.success === true) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_VALIDATION, payload: translateMessage(authResponse.data.message) })
		RootNavigation.navigate('Login')
		yield put({ type: RESET_STEP })
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}


export default function* userSagas() {
	yield takeLeading(POST_REGISTER, registration)
	yield takeLeading(POST_LOGIN, connect)
	yield takeLeading(CHECK_EXISTING_SESSION, checkExistingSession)
	yield takeLeading(POST_REQUEST_PASSWORD_CHANGE, requestPasswordCode)
	yield takeLeading(POST_RESET_PASSWORD, resetPasswordSaga)
}