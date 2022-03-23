import axios from 'axios';
export const GET_CLIENTS = 'GET_CLIENTS';
export const GET_CLIENT_BY_ID = 'GET_CLIENT_BY_ID';
export const GET_CLIENT_BY_NAME = 'GET_CLIENT_BY_NAME';

export const getClients = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`/clients`);
			return await dispatch({
				type: GET_CLIENTS,
				payload: data
			});
		} catch (err) {
			console.log(err);
		}
	};
};
export const getClientById = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`/clients/${id}`);
			console.log(data, 'SOY EL GET CLIENT BY IDDDDDDDDDDDDD');
			return await dispatch({
				type: GET_CLIENT_BY_ID,
				payload: data
			});
		} catch (err) {
			console.log(err);
		}
	};
};
export const getClientByName = (name) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`/clients/${name}`);
			return await dispatch({
				type: GET_CLIENT_BY_NAME,
				payload: data
			});
		} catch (err) {
			console.log(err);
		}
	};
};
export const createClient = async (payload) => {
	try {
		const { data } = await axios.post(`/clients/createClient`, payload);
		return data;
	} catch (err) {
		console.log(err);
	}
};
