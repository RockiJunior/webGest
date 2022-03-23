import { GET_CLIENTS, GET_CLIENT_BY_ID } from './clientsAction.js';

export const initialState = {
	clients: []
	// clientById: {}
};

const clientsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CLIENTS: {
			return {
				...state,
				clients: action.payload
			};
		}
		case GET_CLIENT_BY_ID:{
			return {
				...state,
				clientById: action.payload
			}
		}
		default:
			return state;
	}
};

export default clientsReducer;
