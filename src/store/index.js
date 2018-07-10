/* eslint-disable no-undef */
/* eslint-disable no-process-env */

/**
 * @module store
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/root-reducer';

/**
 * Function to return middlewares for the application
 * @memberof Store#
 * @function
 * @returns {Array<function>} Middleware
 */
function getMiddlewares() {
  return [thunkMiddleware];
}

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

/**
 * Function to return store enhancers for the application, could be various
 * middlewares clubbed together
 * @memberof Store#
 * @function
 * @returns {Function} applyMiddleware
 */
function getStoreEnhancer() {
  return composeEnhancers(applyMiddleware(...getMiddlewares()));
}

/**
 * Function to return the store instance, it takes the combined reducers and
 * store enhancers to create the store
 * @memberof Store#
 * @function
 * @param {Object} initialState | initialState
 * @returns {Store} createReduxStore
 */
export function createReduxStore(initialState) {
  let store = createStore(reducers, initialState, getStoreEnhancer());

  return store;
}

