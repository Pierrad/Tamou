import { combineReducers } from 'redux'

import themeReducer from './theme'
import userReducer from './user'
import appReducer from './app'
import gameReducer from './game'
import loveReducer from './love'

const createRootReducer = combineReducers({
	themeReducer,
	userReducer,
	appReducer,
	gameReducer,
	loveReducer,
})

export default createRootReducer