import { connect } from 'react-redux';
import { getSelectOptions } from './../reducers/crypto';
import Header from './../components/header/header';
import { selectedOption } from './../actions/header';
import { fetchCryptos } from './../actions/cryptos';

/**
 * Function to map state with props to be used by connect
 * @memberof HeaderConnect#
 * @function
 * @name mapStateToProps
 * @param {Object} state - stores state object
 * @returns {Object} in the form {}
 */
function mapStateToProps(state) {
  return {
    selectOptions: getSelectOptions(state),
  };
}

/**
 * Function to map dispatch with props to be used by connect
 * @memberof HeaderConnect#
 * @function
 * @name mapDispatchToProps
 * @param {Object} dispatch - stores dispatch object
 * @returns {Object} in the form {loadRules}
 */
function mapDispatchToProps(dispatch) {
  return {
    onOptionSelection(event) {
      dispatch(selectedOption(event.target.value));
      dispatch(fetchCryptos());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
