import { 
	REGISTER_ERROR,
	LOGIN_ERROR,
	START_LOADING,
	STOP_LOADING,
} from '../actions/user'

const initialState = {
	loading: false,
	error: ''
}

const reducer = (state = initialState, {type, payload}) => {
	switch(type) {
	case REGISTER_ERROR:
		return {
			...state,
			loading: false,
			error: payload
		}
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
	case LOGIN_ERROR:
		return {
			...state,
			loading: false,
			error: payload
		}
	default:
		return state
	}
}

export default reducer