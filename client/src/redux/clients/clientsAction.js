import axios from 'axios';

export const GET_CLIENTS = 'GET_CLIENTS';

export const userRegister = async (payload) => {
	try {
		
        let { data } = await axios.get('/clients', payload);
		
        return data;
	} catch (err) {
        return { msg: err };
	}
};
