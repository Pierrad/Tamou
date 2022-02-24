// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux'

// Reducers
import themeReducer from './theme'
import userReducer from './user'

const createRootReducer = combineReducers({
	themeReducer,
	userReducer,
})

export default createRootReducer