import { 
	SET_ERROR,
	RESET_ERROR,
	SET_VALIDATION,
	RESET_VALIDATION,
	INCREMENT_STEP,
	RESET_STEP,
} from '../actions/app'

const initialState = {
	error: '',
	validation: '',
	step: 0,
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
	case SET_VALIDATION:
		return {
			...state,
			validation: payload,
		}
	case RESET_VALIDATION:
		return {
			...state,
			validation: '',
		}
	case INCREMENT_STEP:
		return {
			...state,
			step: state.step + 1,
		}
	case RESET_STEP:
		return {
			...state,
			step: 0,
		}
	default:
		return state
	}
}

export default reducer