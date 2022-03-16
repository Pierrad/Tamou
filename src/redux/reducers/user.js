import { 
	START_LOADING,
	STOP_LOADING,
	SET_USER,
} from '../actions/user'

const initialState = {
	loading: false,
	user: null,
}

const reducer = (state = initialState, {type, payload}) => {
	switch(type) {
	case START_LOADING:
		return {
			...state,
			loading: true,
			error: ''
		}
	case STOP_LOADING:
		return {
			...state,
			loading: false,
			error: ''
		}
	case SET_USER:
		return {
			...state,
			user: payload
		}
	default:
		return state
	}
}

export default reducer