// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux'

// Reducers
import themeReducer from './theme'

const createRootReducer = combineReducers({
	themeReducer
})

export default createRootReducer