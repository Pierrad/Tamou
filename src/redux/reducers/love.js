import { 
	SET_LOVE_MATCHES,
	SET_LOVE_MATCHES_INDEX,
	SET_LOVE_GET_MATCH_ERROR,
	RESET_LOVE_MATCHES,
} from '../actions/love'

const initialState = {
	loading: false,
	matches: null,
	matchesIndex: 0,
	error: false,
}

const reducer = (state = initialState, {type, payload}) => {
	switch(type) {
	case SET_LOVE_MATCHES:
		return {
			...state,
			matches: payload
		}
	case SET_LOVE_MATCHES_INDEX:
		return {
			...state,
			matchesIndex: payload
		}
	case SET_LOVE_GET_MATCH_ERROR:
		return {
			...state,
			error: payload
		}
	case RESET_LOVE_MATCHES:
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