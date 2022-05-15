import { 
	SET_MATCHES,
	SET_MATCHES_INDEX,
	SET_PUBLIC_PROFILE,
	SET_GET_MATCH_ERROR,
} from '../actions/game'

const initialState = {
	loading: false,
	matches: null,
	matchesIndex: 0,
	potentialMatchProfil: null,
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
	case SET_PUBLIC_PROFILE:
		return {
			...state,
			potentialMatchProfil: payload
		}
	case SET_GET_MATCH_ERROR:
		return {
			...state,
			error: payload
		}
	default:
		return state
	}
}

export default reducer