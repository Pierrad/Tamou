import { combineReducers } from 'redux'

import themeReducer from './theme'
import userReducer from './user'
import appReducer from './app'
import gameReducer from './game'

const createRootReducer = combineReducers({
	themeReducer,
	userReducer,
	appReducer,
	gameReducer,
})

export default createRootReducer