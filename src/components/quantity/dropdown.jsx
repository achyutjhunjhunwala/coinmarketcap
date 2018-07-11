import React from 'react';

/**
 * Dropdown component for selecting the display quantity
 *
 * @name DropDown
 * @returns {JSX} - React Component
 */

export default function DropDown() {
  return (
    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="dropdown">
            <select className="market-select">
              <option key='1' value="1">1</option>
              <option key='2' value="2">2</option>
              <option key='3' value="3">3</option>
              <option key='4' value="4">4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
