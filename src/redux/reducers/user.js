import { 
	SET_USER,
} from '../actions/user'

const initialState = {
	loading: false,
	user: null,
}

const reducer = (state = initialState, {type, payload}) => {
	switch(type) {
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