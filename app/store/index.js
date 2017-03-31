import {
	createStore,
	combineReducers,
	applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import chat from '../reducers/chat';

export function configureStore (initialState = {}) {
	const loggerMiddleware = createLogger();
	const store = createStore(
		combineReducers({
			chat
		}),
		initialState,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	);
	return store;
}