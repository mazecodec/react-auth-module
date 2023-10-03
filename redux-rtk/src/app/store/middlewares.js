import logger from 'redux-logger';
import authApi from '../../features/auth/api/AuthApi';
import {getDefaultMiddleware} from '@reduxjs/toolkit';

const middlewares = getDefaultMiddleware()
.concat(authApi.middleware)
                     .concat(logger);

export default middlewares;
