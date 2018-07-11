import React from 'react';
import DropDown from './../quantity/dropdown';

/**
 * Header component for the App
 *
 * @name Headerbar
 * @returns {JSX} - React Component
 */

export default function Headerbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          CoinMarketCap
        </div>
      </div>
      <DropDown/>
    </nav>
  );
}
