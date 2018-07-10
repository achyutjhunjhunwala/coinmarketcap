import { combineReducers } from 'redux';
import { cryptoConfig } from './crypto';

/**
 * @module Reducer
 */
/**
 * Combine Reducers for the Application
 * @summary The reducer for the application is created by using the Combine
 * Reducers which merges all the specified reducers into one
 */
const rootReducers = combineReducers({
  cryptoConfig,
});

export default rootReducers;
