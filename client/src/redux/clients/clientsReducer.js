import { GET_CLIENTS } from './clientsAction';

export const initialState = {
	clients: []
};

function usersReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CLIENTS: {
			return {
				...state,
				wishList: action.payload
			};
		}
		default:
			return state;
	}
}
export default usersReducer;
