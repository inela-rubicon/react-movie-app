import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loadMovies} from '../../actions/movieActions';
import Movie from './Movie';
import Loading from '../common/Loading';
import ErrorMessage from '../common/ErrorMessage';

class MovieList extends React.Component {
  componentDidMount() {
      this.props.loadMovies();
  }

  render() {
    if (this.props.hasErrored) {
        return <ErrorMessage />
    }
    else if (this.props.isLoading) {
      return <Loading />
    }
    return (
      <div className="container-fluid main-content">
        <div>{this.props.movies.map(movie => <Movie key={movie.id} movie={movie} />)}</div>
      </div>
    );
  }
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  loadMovies: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
      movies: state.movies,
      hasErrored: state.loadMoviesError,
      isLoading: state.moviesAreLoading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      loadMovies: () => dispatch(loadMovies())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
