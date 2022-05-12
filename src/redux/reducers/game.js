import { 
	SET_MATCHES,
	SET_MATCHES_INDEX,
	SET_PUBLIC_PROFILE,
} from '../actions/game'

const initialState = {
	loading: false,
	matches: null,
	matchesIndex: 0,
	potentialMatchProfil: null,
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
	default:
		return state
	}
}

export default reducer