import _ from 'lodash';
import fetchJSON from '../utils/fetch-util';

const URLS = {
  TICKER: 'https://api.coinmarketcap.com/v2/ticker/'
};

/**
 * Fetch the list of available cryptos
 *
 * @returns {Promise<Array<Cryptos>>} Promise that will be resolved to market list
 */
export async function fetchCryptos() {
  let promise;

  try {
    promise = await fetchJSON(URLS.TICKER);
  } catch (e) {
    promise = Promise.reject(e);
  }

  return promise;
}
