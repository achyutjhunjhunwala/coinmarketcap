import { connect } from 'react-redux';
import { getCryptoForGrid, getHeaderForGrid } from './../reducers/crypto';
import Grid from './../components/grid/grid';

/**
 * Function to map state with props to be used by connect
 * @memberof GridConnect#
 * @function
 * @name mapStateToProps
 * @param {Object} state - stores state object
 * @returns {Object} in the form {}
 */
function mapStateToProps(state) {
  return {
    gridData: getCryptoForGrid(state),
    gridHeader: getHeaderForGrid(state),
  };
}

/**
 * Function to map dispatch with props to be used by connect
 * @memberof GridConnect#
 * @function
 * @name mapDispatchToProps
 * @param {Object} dispatch - stores dispatch object
 * @returns {Object} in the form {loadRules}
 */
function mapDispatchToProps(dispatch) {
  return {
    onGridReady: (params) => {
      const api = params.api;

      api.sizeColumnsToFit();
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
