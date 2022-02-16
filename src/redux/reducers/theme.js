import { lightTheme } from '../../themes/theme'
import { 
	SWITCH_THEME,
} from '../actions/theme'

const initialState = {
	theme: { ...lightTheme }
}

const themeReducer = (state = initialState, action) => {
	switch (action.type) {
	case SWITCH_THEME: 
		return {
			...state,
			theme: { ...state.theme, ...action.theme }
		}
	default:
		return state
	}
}

export default themeReducer