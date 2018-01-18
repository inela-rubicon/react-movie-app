import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loadMovies, searchMovies} from '../../actions/movieActions';
import MovieList from './MovieList';
import Search from '../common/Search'

class MoviesPage extends React.Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <Search onKeyUp={this.props.searchMovies} />
        <h1>Popular movies</h1>
        <MovieList />
      </div>
    );
  }
}

MoviesPage.propTypes = {
  searchMovies: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
      searchMovies: (query) => dispatch(searchMovies(query))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
