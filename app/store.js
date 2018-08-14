import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import rootReducer from './reducers'

// Logger with default options
export default createStore(
  rootReducer,
  applyMiddleware(logger)
)
