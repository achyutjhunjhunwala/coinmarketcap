import React from 'react';
import PropTypes from 'prop-types';

import TauChart from './tauchart';

function SpChart({ chartData }) {
  const chartOptions = {
    type: 'scatterplot',
    x: 'market_cap_s',
    y: 'volume_24h_s',
    color: 'name',
    size: 'perc_change_24h',
    guide: {
      x: {
        label: { text: 'Market Cap (Unit in 10 million)', padding: 60 },
      },
      y: {
        label: { text: 'Volume (24h) (unit in 100 million)' },
      },
    },
    settings: {
      fitModel: 'fit-width',
    },
  };

  const props = {
    data: chartData,
    ...chartOptions,
  };

  return (
    <div className='chart-padding'>
      <TauChart {...props} />
    </div>
  );
}

/**
 * Defines Proptype for the components
 * @method classless
 * @memberOf SpChartToolTip
 * @static
 */
SpChart.propTypes = {
  chartData: PropTypes.array,
};

export default SpChart;
