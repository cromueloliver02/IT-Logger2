import {
	GET_LOGS,
	ADD_LOG,
	DELETE_LOG,
	UPDATE_LOG,
	SEARCH_LOGS,
	SET_CURRENT_LOG,
	SET_LOADING,
	LOGS_ERROR
} from './types';

// GET LOGS
export const getLogs = () => {
	return async dispatch => {
		try {
			setLoading();

			// get logs from db
			const res = await fetch('/logs');
			const data = await res.json();

			// display logs to ui
			dispatch({
				type: GET_LOGS,
				payload: data
			});
		} catch (err) {
			dispatch({
				type: LOGS_ERROR,
				payload: err.response.statusText
			});
		}
	};
};

// ADD LOGS
export const addLog = log => {
	return async dispatch => {
		try {
			setLoading();

			// add log to db
			const res = await fetch(`/logs`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(log)
			});
			const data = await res.json();

			// add log to ui
			dispatch({
				type: ADD_LOG,
				payload: data
			});
		} catch (err) {
			dispatch({
				type: LOGS_ERROR,
				payload: err.response.statusText
			});
		}
	};
};

// DELETE LOG
export const deleteLog = id => {
	return async dispatch => {
		try {
			setLoading();

			// delete log from db
			await fetch(`/logs/${id}`, {
				method: 'DELETE'
			});

			// delete log from ui
			dispatch({
				type: DELETE_LOG,
				payload: id
			});
		} catch (err) {
			dispatch({
				type: LOGS_ERROR,
				payload: err.response.statusText
			});
		}
	};
};

// UPDATE LOG
export const updateLog = log => {
	return async dispatch => {
		try {
			setLoading();

			// update log from db
			const res = await fetch(`/logs/${log.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(log)
			});
			const data = await res.json();

			// update log from ui
			dispatch({
				type: UPDATE_LOG,
				payload: data
			});
		} catch (err) {
			dispatch({
				type: LOGS_ERROR,
				payload: err.response.statusText
			});
		}
	};
};

// SEARCH LOGS
export const searchLogs = text => {
	return async dispatch => {
		try {
			setLoading();

			// search logs from db
			const res = await fetch(`/logs?q=${text}`);
			const data = await res.json();

			// display logs to ui
			dispatch({
				type: SEARCH_LOGS,
				payload: data
			});
		} catch (err) {
			dispatch({
				type: LOGS_ERROR,
				payload: err.response.statusText
			});
		}
	};
};

// SET CURRENT LOG
export const setCurrentLog = log => {
	return {
		type: SET_CURRENT_LOG,
		payload: log
	};
};

// SET LOADING
const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
