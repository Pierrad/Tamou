import {
	call,
	put,
	select,
	takeLeading,
} from 'redux-saga/effects'

import { SET_PREFERENCES } from '../actions/love'
import { SET_ERROR, SET_VALIDATION, START_LOADING, STOP_LOADING } from '../actions/app'
import { postPreferences } from '../api/love'
import * as userSelectors from '../selectors/user'

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


export default function* gameSagas() {
	yield takeLeading(SET_PREFERENCES, setPreferences)
}