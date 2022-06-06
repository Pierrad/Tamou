import { 
	SET_MULTIPLE_PARTNERS,
	SET_PUBLIC_PROFILE,
	SET_USER,
	RESET_PUBLIC_PROFILE,
} from '../actions/user'

const initialState = {
	loading: false,
	user: null,
	partners: null,
	potentialMatchProfil: null,
}

const reducer = (state = initialState, {type, payload}) => {
	switch(type) {
	case SET_USER:
		return {
			...state,
			user: payload
		}
	case SET_PUBLIC_PROFILE:
		return {
			...state,
			potentialMatchProfil: payload
		}
	case SET_MULTIPLE_PARTNERS:
		return {
			...state,
			partners: payload
		}
	case RESET_PUBLIC_PROFILE:
		return {
			...state,
			potentialMatchProfil: null
		}
	default:
		return state
	}
}

export default reducer