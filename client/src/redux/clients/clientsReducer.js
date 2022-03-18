import { GET_CLIENTS } from './clientsAction.js';

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
		default:
			return state;
	}
};

export default clientsReducer;
