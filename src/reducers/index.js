import {combineReducers} from 'redux';
import {loadMoviesError, moviesAreLoading, movies,
  loadMovieDetailsError, movieDetailsAreLoading, movie} from './movieReducer';

const rootReducer = combineReducers({
  loadMoviesError,
  moviesAreLoading,
  movies,
  loadMovieDetailsError,
  movieDetailsAreLoading,
  movie
});

export default rootReducer;
