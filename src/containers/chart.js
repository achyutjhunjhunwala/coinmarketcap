import { connect } from 'react-redux';
import { getCryptoForSpChart } from './../reducers/crypto';
import SpChartToolTip from '../components/chart/scatter-chart';

/**
 * Function to map state with props to be used by connect
 * @memberof ChartConnect#
 * @function
 * @name mapStateToProps
 * @param {Object} state - stores state object
 * @returns {Object} in the form {}
 */
function mapStateToProps(state) {
  return {
    chartData: getCryptoForSpChart(state),
  };
}

/**
 * Function to map dispatch with props to be used by connect
 * @memberof ChartConnect#
 * @function
 * @name mapDispatchToProps
 * @param {Object} dispatch - stores dispatch object
 * @returns {Object} in the form {loadRules}
 */
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpChartToolTip);
