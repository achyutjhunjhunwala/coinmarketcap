import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createReduxStore } from './store';
import INITIAL_STATE from './reducers/initial-state';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

ReactDOM.render(
  <App store={createReduxStore({ ...INITIAL_STATE })}/>,
  document.getElementById('root')
);
