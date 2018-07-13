import React from 'react';
import Taucharts from 'taucharts';
import tooltip from 'taucharts/dist/plugins/tooltip';
import PropTypes from 'prop-types';

class TauChart extends React.Component {
  componentWillUnmount() {
    this._chart && this._chart.destroy();
  }

  componentDidMount() {
    if (this.props.data && this.props.data.length) {
      this._chart = new Taucharts.Chart(Object.assign({}, this.props, {
        plugins: [
          Taucharts.api.plugins.get('tooltip')({
            fields: ['name', 'market_cap', 'volume_24h', 'perc_change_24h_actual'],
          }),
        ],
      }));
      this._chart.renderTo(this.refs.placeholder);
    }
  }

  render() {
    return (<div ref="placeholder" />);
  }
}

/**
 * Defines Proptype for the components
 * @method classless
 * @memberOf TauChart
 * @static
 */
TauChart.propTypes = {
  data: PropTypes.array,
};

export default TauChart;

