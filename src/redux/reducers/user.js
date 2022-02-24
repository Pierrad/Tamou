import { 
	REGISTER_ERROR,
} from '../actions/user'

const initialState = {
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
	default:
		return state
	}
}

export default reducer