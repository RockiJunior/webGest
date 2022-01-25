import { createStore, applyMiddleware, compose } from 'redux';
import combineReducers from './combineReducer.js';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers,
    composeEnhancers(applyMiddleware(thunk)));

export default store;
