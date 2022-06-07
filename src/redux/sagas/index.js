import { spawn } from 'redux-saga/effects'

import themeSagas from './theme'
import userSagas from './user'
import gameSagas from './game'
import loveSagas from './love'

export default function* rootSaga() {
	yield spawn(themeSagas)
	yield spawn(userSagas)
	yield spawn(gameSagas)
	yield spawn(loveSagas)
}