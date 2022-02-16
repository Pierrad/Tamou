import { spawn } from 'redux-saga/effects'

// Sagas
import themeSagas from './theme'

// Export the root saga
export default function* rootSaga() {
	yield spawn(themeSagas)
}