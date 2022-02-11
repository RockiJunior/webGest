import axios from 'axios';
export const GET_CLIENTS = 'GET_CLIENTS';
export const GET_CLIENT_BY_ID = 'GET_CLIENT_BY_ID';
export const GET_CLIENT_BY_NAME = 'GET_CLIENT_BY_NAME';

// export async function postBrand(payload) {
// 	const json = await axios.post(`/brands/create`, payload);
// 	return json;
// }

export function getBrands() {
	return async (dispatch) => {
		const { data } = await axios.get('http://localhost:3001/api/clients');
		return await dispatch({
			type: GET_CLIENTS,
			payload: data
		});
	};
}

export function getBrandById(id) {
	return async (dispatch) => {
		const { data } = await axios.get(`http://localhost:3001/api/clients/${id}`);
		return await dispatch({
			type: GET_CLIENT_BY_ID,
			payload: data
		});
	};
}

// export const getBrandsByName = (payload) => {
// 	return async (dispatch) => {
// 		try {
// 			return await dispatch({
// 				type: GET_CLIENT_BY_NAME,
// 				payload
// 			});
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// };

// export async function PutBrands(payload) {
// 	console.log(payload);
// 	const { data } = axios.put(`/brands/editBrand`, payload);

// 	return data;
// }
