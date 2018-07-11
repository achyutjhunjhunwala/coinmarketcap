const formatDataForGrid = (cryptos) => {
  if (!cryptos) {
    return null;
  }

  return cryptos.map(crypto => ({
    rank: crypto.rank,
    name: crypto.name,
    price: crypto.quotes.USD.price,
    price_change: crypto.quotes.USD.percent_change_24h,
    market_cap: crypto.quotes.USD.market_cap,
    volume_24h: crypto.quotes.USD.volume_24h,
  }));
};

export {
  formatDataForGrid,
};
