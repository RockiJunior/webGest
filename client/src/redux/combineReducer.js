import { combineReducers } from 'redux';

import clientsReducer from './clients/clientsReducer.js';

export const reducers = combineReducers({
    clientsReducer
});

export default reducers;