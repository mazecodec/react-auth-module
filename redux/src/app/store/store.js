import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducers';
import middlewares from './middlewares';

export const store = configureStore({
	reducer: rootReducers,
	middleware: middlewares,
});