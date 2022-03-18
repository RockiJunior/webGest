import axios from 'axios';
export const GET_CLIENTS = 'GET_CLIENTS';

export const getClients = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get('/clients');
			return await dispatch({
				type: GET_CLIENTS,
				payload: data
			});
		} catch (err) {
			console.log(err);
		}
	};
};
