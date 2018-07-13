import React from 'react';
import PropTypes from 'prop-types';

import { AgGridReact } from 'ag-grid-react';

function Grid({ gridData, gridHeader, onGridReady }) {
  return (
    <div
      className="ag-theme-balham"
      style={{
        height: '100vh',
        width: '100vw',
        display: 'grid',
        overflow: 'hidden',

      }}
    >
      <AgGridReact
        columnDefs={gridHeader}
        rowData={gridData}
        onGridReady={(params) => onGridReady(params)}
      />
    </div>
  );
}

/**
 * Defines Proptype for the components
 * @method classless
 * @memberOf DataTable
 * @static
 */
Grid.propTypes = {
  gridData: PropTypes.array,
  gridHeader: PropTypes.array,
  onGridReady: PropTypes.func,
};

export default Grid;
