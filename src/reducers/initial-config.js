import { ACTIONS } from '../actions/types';
import INITIAL_STATE from './initial-state';

/**
 * Return the default state object
 * @memberof InitialConfig#
 * @name getState
 * @function
 * @param {Object} state - Redux State object
 * @returns {Object} state
 */
function getState(state) {
  return state;
}

/**
 * Return the list of URL's object
 * @memberof InitialConfig#
 * @name getUrls
 * @function
 * @param {Object} state - Redux State object
 * @returns {Object} urls
 */
function getUrls(state) {
  return state.urls;
}

/**
 * Reducer Function
 * @memberof InitialConfig#
 * @function
 * @param {Object} state - State Object
 * @param {Object} action - Action Object
 * @returns {Object} nextState
 * @default
 */
function initialConfig(state = INITIAL_STATE.initialConfig, action = {}) {
  let _state;

  switch (action.type) {
  case ACTIONS.APP.LOAD_INITIAL_CONFIG:
    _state = {
      ...state,
      ...action.payload,
    };
    break;
  default:
    _state = state;
  }

  return _state;
}

export {
  getState,
  getUrls,
  initialConfig,
};
