import { ACTIONS } from '../actions/types';
import INITIAL_STATE from './initial-state';
import { formatDataForGrid, formatDataForSpChart } from './../utils/crypto';

/**
 * Return the Crypto Data Object Formatted for the Grid
 * @memberof Crypto#
 * @name getCryptoForGrid
 * @function
 * @param {Object} state - Redux State object
 * @returns {Object} state
 */
function getCryptoForGrid(state) {
  return state.cryptoConfig && state.cryptoConfig.data ? formatDataForGrid(state.cryptoConfig.data) : null;
}

/**
 * Return the Crypto Data Object Formatted for the Scattered Plot Chart with ToolTip
 * @memberof Crypto#
 * @name getCryptoForSpChart
 * @function
 * @param {Object} state - Redux State object
 * @returns {Object} state
 */
function getCryptoForSpChart(state) {
  return state.cryptoConfig && state.cryptoConfig.data ? formatDataForSpChart(state.cryptoConfig.data) : null;
}

/**
 * Return the Column Titles for the Grid
 * @memberof Crypto#
 * @name getHeaderForGrid
 * @function
 * @param {Object} state - Redux State object
 * @returns {Object} state
 */
function getHeaderForGrid(state) {
  return state.cryptoConfig.headers;
}

/**
 * Return the dropdown options for pagination
 * @memberof Crypto#
 * @name getSelectOptions
 * @function
 * @param {Object} state - Redux State object
 * @returns {Object} state
 */
function getSelectOptions(state) {
  return state.cryptoConfig.pagination;
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
      data: [...action.payload],
    };
    break;
  case ACTIONS.PAGINATION.SET:
    _state = {
      ...state,
      pagination: {
        ...state.pagination,
        selected: action.payload,
      },
    };
    break;
  default:
    _state = state;
  }

  return _state;
}

export {
  getCryptoForGrid,
  getCryptoForSpChart,
  getHeaderForGrid,
  getSelectOptions,
  cryptoConfig,
};
