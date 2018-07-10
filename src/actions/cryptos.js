import { fetchCryptos as fetchCryptosApi } from './../services/api';
import { ACTIONS } from './types';

/**
 * Action creator for fetching list of markets from the server
 * @returns {ThunkAction} Thunk action
 */
export function fetchCryptos() {
  return (dispatch) => {
    fetchCryptosApi()
      .then((cryptos) => dispatch({
        type: ACTIONS.FETCH.SUCCESS.CRYPTOS,
        payload: cryptos,
      }))
      .catch((error) => dispatch({
        type: ACTIONS.FETCH.ERROR.CRYPTOS,
        error,
      }));
  };
}
