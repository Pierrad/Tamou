import {
	call,
	put,
	takeLeading,
} from 'redux-saga/effects'

import { POST_REGISTER, REGISTER_ERROR, START_LOADING, STOP_LOADING } from '../actions/user'
import { register } from '../api/user'
import * as RootNavigation from '../../navigation/RootNavigation'



function* registration({ payload }) {
	yield put({ type: START_LOADING })

	const authResponse = yield call(register, payload)

	if (authResponse.success === true) {
		yield put({ type: STOP_LOADING })
		yield put({ type: POST_REGISTER, payload: authResponse })
		RootNavigation.navigate('Login')
	} else if (authResponse && authResponse.success === false) {
		yield put({ type: STOP_LOADING })
		yield put({ type: REGISTER_ERROR, payload: authResponse.data.message })
	}
}


export default function* userSagas() {
	yield takeLeading(POST_REGISTER, registration)
}