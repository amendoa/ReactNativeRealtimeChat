import {
	createStore,
	combineReducers,
	applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import chatReducer from '../reducers/chat';

export function configureStore (initialState = {}) {
	const loggerMiddleware = createLogger();
	const store = createStore(
		combineReducers({
			chatReducer
		}),
		initialState,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	);
	return store;
}