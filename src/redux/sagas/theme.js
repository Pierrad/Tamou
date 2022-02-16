import {
	put,
	takeLeading,
} from 'redux-saga/effects'

import {
	SWITCH_THEME,
} from '../actions/theme'


// Switch theme 
function* switchTheme(theme) {
	yield put({ type: SWITCH_THEME, theme })
}

export default function* themeSagas() {
	yield takeLeading(SWITCH_THEME, switchTheme)

}