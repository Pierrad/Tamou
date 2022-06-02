import {
	call,
	put,
	select,
	takeLeading,
} from 'redux-saga/effects'
import * as Keychain from 'react-native-keychain'

import { POST_REGISTER, POST_LOGIN, CHECK_EXISTING_SESSION, SESSION_REDIRECTION, SET_USER, POST_REQUEST_PASSWORD_CHANGE, POST_RESET_PASSWORD, POST_NEW_PROFIL_PICTURE, POST_DELETE_ACCOUNT, POST_LOGOUT, SET_MULTIPLE_PARTNERS, GET_MULTIPLE_PARTNERS, DELETE_NOTIFICATION, EDIT_USER } from '../actions/user'
import { INCREMENT_STEP, RESET_STEP, SET_ERROR, SET_VALIDATION, START_LOADING, STOP_LOADING } from '../actions/app'
import { register, login, requestPasswordChange, resetPassword, uploadUserPicture, deleteAccount, getMultiplePublicProfile, deleteNotification, editUser } from '../api/user'
import * as RootNavigation from '../../helpers/navigation'
import { translateMessage } from '../../helpers/api'
import { hasSubscribeToCategories } from '../../helpers/user'
import * as userSelectors from '../selectors/user'
import { User } from '../../models/User'
import { PublicUser } from '../../models/PublicProfile'
import i18n from '../../i18n/i18n'


function* sessionRedirect() {
	const hasSession = yield call(checkExistingSession)
	if (!hasSession) {
		RootNavigation.navigate('Splash')
	} else {
		RootNavigation.navigate('Dashboard')
	}
}

function* checkExistingSession() {
	const credentials = yield call(Keychain.getGenericPassword)

	if (credentials) {
		const authResponse = yield call(login, { email: credentials.username, password: credentials.password })
		if (authResponse.success === true) {
			yield put({ type: SET_USER, payload: User(authResponse.data.user) })
			return true
		}
	}
	return false
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
		yield put({ type: SET_USER, payload: User(authResponse.data.user) })
		yield call(Keychain.setGenericPassword, ...[payload.email, payload.password])

		if (hasSubscribeToCategories(authResponse.data.user)) {
			RootNavigation.navigate('Dashboard')
		} else {
			RootNavigation.navigate('SurveyStepper')
		}
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}

function* logout() {
	yield call(Keychain.resetGenericPassword)
	RootNavigation.navigate('Login')
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
	const user = yield select(userSelectors.user)

	const authResponse = yield call(uploadUserPicture, { ...payload, token: user.token })

	if (authResponse.success === true) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_VALIDATION, payload: translateMessage(authResponse.data.message) })
		yield put({ type: CHECK_EXISTING_SESSION })
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}

function* handleDeleteAccount() {
	const user = yield select(userSelectors.user)

	const authResponse = yield call(deleteAccount, { token: user.token })

	if (authResponse.success === true) {
		RootNavigation.navigate('Login')
		yield call(Keychain.resetGenericPassword)
		yield put({ type: SET_USER, payload: null })
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}

function* fetchMultiplePublicProfile({ payload }) {
	const user = yield select(userSelectors.user)

	const uniqueIds = [...new Set(payload.publicIds)]

	const authResponse = yield call(getMultiplePublicProfile, { token: user.token, publicIds: uniqueIds })

	if (authResponse.success === true) {
		yield put({ type: SET_MULTIPLE_PARTNERS, payload: authResponse.data.users.map((user) => PublicUser(user)) })
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}

function* handleDeleteNotification({ payload }) {
	const user = yield select(userSelectors.user)

	const authResponse = yield call(deleteNotification, { token: user.token, id: payload.id })

	if (authResponse.success === true) {
		yield put({ type: SET_VALIDATION, payload: i18n.t('') })
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: SET_ERROR, payload: translateMessage(authResponse.data.message) })
	}
}

function* handleEditUser({ payload }) {
	const user = yield select(userSelectors.user)

	const authResponse = yield call(editUser, { ...payload, token: user.token })

	if (authResponse.success === true) {
		yield put({ type: SET_VALIDATION, payload: i18n.t('profil_edit_success') })
		yield call(checkExistingSession)
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: SET_ERROR, payload: i18n.t('profil_edit_error') })
	}
}


export default function* userSagas() {
	yield takeLeading(POST_REGISTER, registration)
	yield takeLeading(POST_LOGIN, connect)
	yield takeLeading(POST_LOGOUT, logout)
	yield takeLeading(SESSION_REDIRECTION, sessionRedirect)
	yield takeLeading(CHECK_EXISTING_SESSION, checkExistingSession)
	yield takeLeading(POST_REQUEST_PASSWORD_CHANGE, requestPasswordCode)
	yield takeLeading(POST_RESET_PASSWORD, resetPasswordSaga)
	yield takeLeading(POST_NEW_PROFIL_PICTURE, uploadProfilePicture)
	yield takeLeading(POST_DELETE_ACCOUNT, handleDeleteAccount)
	yield takeLeading(GET_MULTIPLE_PARTNERS, fetchMultiplePublicProfile)
	yield takeLeading(DELETE_NOTIFICATION, handleDeleteNotification)
	yield takeLeading(EDIT_USER, handleEditUser)
}