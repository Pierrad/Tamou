import { 
	SET_MATCHES,
	SET_MATCHES_INDEX,
	SET_GET_MATCH_ERROR,
	RESET_MATCHES,
} from '../actions/game'

const initialState = {
	loading: false,
	matches: null,
	matchesIndex: 0,
	error: false,
}

const reducer = (state = initialState, {type, payload}) => {
	switch(type) {
	case SET_MATCHES:
		return {
			...state,
			matches: payload
		}
	case SET_MATCHES_INDEX:
		return {
			...state,
			matchesIndex: payload
		}
	case SET_GET_MATCH_ERROR:
		return {
			...state,
			error: payload
		}
	case RESET_MATCHES:
		return {
			...state,
			matches: null,
			matchesIndex: 0,
			error: false,
		}
	default:
		return state
	}
}

export default reducer