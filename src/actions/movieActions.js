import actions from './constants';
import MovieApi from '../api/movieApi';

export const loadMovies = () => {
  return (dispatch) => {
      dispatch(moviesAreLoading(true));
      MovieApi.getPopularMovies()
          .then((response) => {
              dispatch(moviesAreLoading(false));
              return response;
          })
          .then((movies) => {
            dispatch(loadMoviesSuccess(movies));
          })
          .catch((error) => {
            dispatch(loadMoviesError(true));
          });
  };
};

export const loadMoviesError = (bool) => {
    return {
        type: actions.movie.LOAD_MOVIES_ERROR,
        hasErrored: bool
    };
};

export const moviesAreLoading = (bool) => {
    return {
        type: actions.movie.MOVIES_ARE_LOADING,
        isLoading: bool
    };
};

export const loadMoviesSuccess = (movies) => {
    return {
        type: actions.movie.LOAD_MOVIES_SUCCESS,
        movies
    };
};

export const loadMovieDetails = (id) => {
  return (dispatch) => {
      dispatch(movieDetailsAreLoading(true));
      MovieApi.getMovieDetails(id)
          .then((response) => {
              dispatch(movieDetailsAreLoading(false));
              return response;
          })
          .then((movie) => {
            dispatch(loadMovieDetailsSuccess(movie));
          })
          .catch((error) => {
            dispatch(loadMovieDetailsError(true));
          });
  };
};

export const loadMovieDetailsError = (bool) => {
    return {
        type: actions.movie.LOAD_MOVIE_DETAILS_ERROR,
        hasErrored: bool
    };
};

export const movieDetailsAreLoading = (bool) => {
    return {
        type: actions.movie.MOVIE_DETAILS_ARE_LOADING,
        isLoading: bool
    };
};

export const loadMovieDetailsSuccess = (movie) => {
    return {
        type: actions.movie.LOAD_MOVIE_DETAILS_SUCCESS,
        movie
    };
};

export const searchMovies = (query) => {
  return (dispatch) => {
      dispatch(moviesAreLoading(true));
      MovieApi.searchMovies(query)
          .then((response) => {
              dispatch(moviesAreLoading(false));
              return response;
          })
          .then((movies) => {
            dispatch(loadMoviesSuccess(movies));
          })
          .catch(() => dispatch(loadMoviesError(true)));
  };
};
