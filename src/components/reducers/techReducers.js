import {
	GET_TECHS,
	ADD_TECH,
	DELETE_TECH,
	UPDATE_TECH,
	SET_CURRENT_TECH,
	TECH_ERROR,
	SET_LOADING
} from '../actions/types';

const initialState = {
	techs: null,
	currentTech: null,
	loading: false,
	techError: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_TECHS:
			return {
				...state,
				techs: action.payload,
				loading: false
			};
		case ADD_TECH:
			return {
				...state,
				techs: [...state.techs, action.payload],
				loading: false
			};
		case DELETE_TECH:
			return {
				...state,
				techs: [...state.techs].filter(tech => tech.id !== action.payload),
				loading: false
			};
		case UPDATE_TECH:
			return {
				...state,
				techs: [...state.techs].map(tech => (tech.id === action.payload.id ? action.payload : tech)),
				currentTech: null,
				loading: false
			};
		case SET_CURRENT_TECH:
			return {
				...state,
				currentTech: action.payload
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case TECH_ERROR:
			console.error(action.payload);
			return {
				...state,
				techError: action.payload
			};
		default:
			return state;
	}
};
