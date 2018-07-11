import fetchJSON from '../utils/fetch-util';

const URLS = {
  TICKER: 'https://api.coinmarketcap.com/v2/ticker/',
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
