import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from './components/header/header';
import Grid from './containers/grid';

import { fetchCryptos } from './actions/cryptos';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.store.dispatch(fetchCryptos());
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={this.props.store}>
          <Fragment>
            <Header/>
            <Grid/>
          </Fragment>
        </Provider>
      </BrowserRouter>
    );
  }
}

App.propTypes = { store: PropTypes.object.isRequired };

export default App;
