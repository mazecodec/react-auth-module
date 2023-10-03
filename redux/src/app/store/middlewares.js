import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

const middlewares = [logger, promise];

export default middlewares;
