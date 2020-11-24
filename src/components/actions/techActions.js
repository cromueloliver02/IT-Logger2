import {
	GET_TECHS,
	ADD_TECH,
	DELETE_TECH,
	UPDATE_TECH,
	SET_CURRENT_TECH,
	SET_LOADING,
	TECH_ERROR
} from './types';

// GET TECHS
export const getTechs = () => {
	return async dispatch => {
		try {
			setLoading();

			// get techs from db
			const res = await fetch('/techs');
			const data = await res.json();

			// show techs to ui
			dispatch({
				type: GET_TECHS,
				payload: data
			});
		} catch (err) {
			dispatch({
				type: TECH_ERROR,
				payload: err.response.statusText
			});
		}
	};
};

// ADD TECHS
export const addTech = tech => {
	return async dispatch => {
		try {
			setLoading();

			// add tech to db
			const res = await fetch(`/techs`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(tech)
			});
			const data = await res.json();

			// add tech to ui
			dispatch({
				type: ADD_TECH,
				payload: data
			});
		} catch (err) {
			dispatch({
				type: TECH_ERROR,
				payload: err.response.statusText
			});
		}
	};
};

// DELETE TECH
export const deleteTech = id => {
	return async dispatch => {
		try {
			setLoading();

			// delete tech from db
			await fetch(`/techs/${id}`, {
				method: 'DELETE'
			});

			// delete tech from ui
			dispatch({
				type: DELETE_TECH,
				payload: id
			});
		} catch (err) {
			dispatch({
				type: TECH_ERROR,
				payload: err.response.statusText
			});
		}
	};
};

// UPDATE TECH
export const updateTech = tech => {
	return async dispatch => {
		try {
			setLoading();

			// update tech from db
			const res = await fetch(`/techs/${tech.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(tech)
			});
			const data = await res.json();

			// update tech from ui
			dispatch({
				type: UPDATE_TECH,
				payload: data
			});
		} catch (err) {
			dispatch({
				type: TECH_ERROR,
				payload: err.response.statusText
			});
		}
	};
};

// SET CURRENT TECH
export const setCurrentTech = tech => {
	return {
		type: SET_CURRENT_TECH,
		payload: tech
	};
};

// SET LOADING
const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
