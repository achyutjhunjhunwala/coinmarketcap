import fetchJSON from '../utils/fetch-util';

const URLS = {
  TICKER: 'https://api.coinmarketcap.com/v2/ticker/?limit=',
};

/**
 * Fetch the list of available cryptos
 * @param {String} limit | selected value
 * @returns {Promise<Array<Cryptos>>} Promise that will be resolved to market list
 */

export async function fetchCryptos(limit) {
  let promise;

  try {
    promise = await fetchJSON(URLS.TICKER + createFetchUrl(limit));
    return sortCryptos(promise.data);
  } catch (e) {
    promise = Promise.reject(e);
  }

  return promise;
}

/**
 * Function for sort the cryptos by rank as by default the API returns them sorted by ID
 * @param cryptos
 * @return {Array<cryptos>}
 */

function sortCryptos(cryptos) {
  const formattedCryptos = Object.keys(cryptos).map(key => cryptos[key]);

  formattedCryptos.sort((crypto1, crypto2) => crypto1.rank - crypto2.rank);

  return formattedCryptos;
}

/**
 * Since the API takes number or 'all' as limit parameter, hence monkey patching
 * @param {String} selectedOption option
 * @return {String|Number}
 */

function createFetchUrl(selectedOption) {
  const limit = parseInt(selectedOption, 10);

  return limit ? limit : 'all';
}
