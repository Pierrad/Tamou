import { 
	SET_ERROR,
	RESET_ERROR,
} from '../actions/app'

const initialState = {
	error: '',
}

const reducer = (state = initialState, {type, payload}) => {
	switch(type) {
	case SET_ERROR:
		return {
			...state,
			error: payload,
		}
	case RESET_ERROR:
		return {
			...state,
			error: '',
		}
	default:
		return state
	}
}

export default reducer