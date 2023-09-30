import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducers.js';

export const store = configureStore({
  reducer:rootReducers
})