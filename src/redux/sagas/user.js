import {
	call,
	put,
	select,
	takeLeading,
} from 'redux-saga/effects'
import * as Keychain from 'react-native-keychain'
import { Platform } from 'react-native'
import { API_URL_ANDROID, APP_ENV } from '@env'

import { POST_REGISTER, POST_LOGIN, CHECK_EXISTING_SESSION, SET_USER, POST_REQUEST_PASSWORD_CHANGE, POST_RESET_PASSWORD, POST_NEW_PROFIL_PICTURE, POST_DELETE_ACCOUNT } from '../actions/user'
import { INCREMENT_STEP, RESET_STEP, SET_ERROR, SET_VALIDATION, START_LOADING, STOP_LOADING } from '../actions/app'
import { register, login, requestPasswordChange, resetPassword, uploadUserPicture, deleteAccount } from '../api/user'
import * as RootNavigation from '../../navigation/RootNavigation'
import { translateMessage } from '../../helpers/api'
import * as userSelectors from '../selectors/user'


function* checkExistingSession() {
	const credentials = yield call(Keychain.getGenericPassword)
	if (credentials) {
		const authResponse = yield call(login, { email: credentials.username, password: credentials.password })
		if (authResponse.success === true) {
			const user = {
				...authResponse.data.user,
				avatar: Platform.OS === 'ios'
					? authResponse.data.user.imageProfile
					: APP_ENV === 'local'
						? `${API_URL_ANDROID}/images/${authResponse.data.user.imageProfile.split('/').pop()}`
						: authResponse.data.user.imageProfile,
			}
			yield put({ type: SET_USER, payload: user })
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
		const user = {
			...authResponse.data.user,
			avatar: Platform.OS === 'ios'
				? authResponse.data.user.imageProfile
				: APP_ENV === 'local'
					? `${API_URL_ANDROID}/images/${authResponse.data.user.imageProfile.split('/').pop()}`
					: authResponse.data.user.imageProfile,
		}
		yield put({ type: SET_USER, payload: user })
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

function* uploadProfilePicture({ payload }) {
	yield put({ type: START_LOADING })

	const authResponse = yield call(uploadUserPicture, payload)

	console.log(authResponse)

	if (authResponse.success === true) {
		yield put({ type: STOP_LOADING })
		// yield put({ type: SET_VALIDATION, payload: translateMessage(authResponse.data.message) })
		// RootNavigation.navigate('Login')
		yield put({ type: RESET_STEP })
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}

function* handleDeleteAccount() {
	const user = yield select(userSelectors.user)

	const authResponse = yield call(deleteAccount, { token: user.token.token })

	console.log(authResponse)

	if (authResponse.success === true) {
		RootNavigation.navigate('Login')
		yield call(Keychain.resetGenericPassword)
		yield put({ type: SET_USER, payload: null })
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
	yield takeLeading(POST_NEW_PROFIL_PICTURE, uploadProfilePicture)
	yield takeLeading(POST_DELETE_ACCOUNT, handleDeleteAccount)
}