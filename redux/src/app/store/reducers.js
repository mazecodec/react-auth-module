import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '../../features/auth/slices/authSlice.js';

const rootReducers = combineReducers({
  auth: authReducer
})

export default rootReducers