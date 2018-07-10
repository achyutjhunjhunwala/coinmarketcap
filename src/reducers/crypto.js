import { ACTIONS } from '../actions/types';
import INITIAL_STATE from './initial-state';

/**
 * Return the default state object
 * @memberof Crypto#
 * @name getState
 * @function
 * @param {Object} state - Redux State object
 * @returns {Object} state
 */
function getState(state) {
  return state;
}

/**
 * Reducer Function
 * @memberof Crypto#
 * @function
 * @param {Object} state - State Object
 * @param {Object} action - Action Object
 * @returns {Object} nextState
 * @default
 */
function cryptoConfig(state = INITIAL_STATE.cryptoConfig, action = {}) {
  let _state;

  switch (action.type) {
  case ACTIONS.FETCH.SUCCESS.CRYPTOS:
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
  cryptoConfig,
};
