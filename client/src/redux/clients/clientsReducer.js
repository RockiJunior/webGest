import { GET_CLIENTS, GET_CLIENT_BY_ID, GET_CLIENT_BY_NAME } from './clientsAction';

export const initialState = {
	clients: [],
	clientById: {}
};

function clientsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CLIENTS: {
			return {
				...state,
				clients: action.payload
			};
		}
		case GET_CLIENT_BY_ID: {
			return {
				...state,
				brandById: action.payload
			};
		}
		case GET_CLIENT_BY_NAME: {
			let data = state.clients;
			let filteredData =
				action.payload !== '' ?
				data.filter((e) => e.name.toLowerCase().includes(action.payload)):
				data;
			return {
				...state,
				clients: filteredData
			};
		}

		default:
			return state;
	}
}

export default clientsReducer;
