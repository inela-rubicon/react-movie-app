import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import Header from './common/Header';
import MoviesPage from './movies/MoviesPage';
import MovieDetailsPage from './movies/MovieDetailsPage';
import TvShowsPage from './tv-shows/TvShowsPage';
import configureStore from '../store/configureStore';
import {loadMovies} from '../actions/movieActions';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container-fluid">
            <Header />
            <Switch>
              <Route exact path="/movies" component={MoviesPage} />
              <Route path="/movies/:id" component={MovieDetailsPage} />
              <Route path="/tv-shows" component={TvShowsPage} />
              <Redirect from="/" to="/movies" />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
