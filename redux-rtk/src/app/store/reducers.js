import {combineReducers} from '@reduxjs/toolkit';
import auth from 'src/features/auth/slices/authSlice.js';

const rootReducers = combineReducers({
  auth
})

export default rootReducers