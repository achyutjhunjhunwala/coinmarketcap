import React from 'react';
import PropTypes from 'prop-types';

import DropDown from './../quantity/dropdown';
import NavBar from './../navbar/navbar';

import './header.css';

/**
 * Header component for the App
 *
 * @name Header
 * @returns {JSX} - React Component
 */

export default function Header({ selectOptions, onOptionSelection }) {
  return (
    <nav className="navbar" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          CoinMarketCap
        </div>
      </div>
      <div className="navbar-menu">
        <NavBar/>
        <DropDown selectOptions={selectOptions} onOptionSelection={onOptionSelection}/>
      </div>
    </nav>
  );
}

/**
 * Defines Proptype for the components
 * @method classless
 * @memberOf Header
 * @static
 */
Header.propTypes = {
  onOptionSelection: PropTypes.func,
  selectOptions: PropTypes.object,
};
