/**
 * The configuration object of the CoinMarketCap Application
 * @memberOf initialState
 * @type {Object}
 * @name baseConfigReducer
 * @namespace initialState
 */

export default {
  cryptoConfig: {
    data: [],
    headers: [
      { headerName: 'Rank', field: 'rank' },
      { headerName: 'Name', field: 'name' },
      { headerName: 'Price', field: 'price' },
      { headerName: 'Price Change (24h)', field: 'price_change' },
      { headerName: 'Market Cap', field: 'market_cap' },
      { headerName: 'Volume (24h)', field: 'volume_24h' },
    ],
    pagination: {
      options: [10, 50, 100, 'all'],
      selected: 100,
    },
  },
};
