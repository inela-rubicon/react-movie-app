import actions from '../actions/constants';

export const loadMoviesError = (state = false, action) => {
    switch (action.type) {
        case actions.movie.LOAD_MOVIES_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
}

export const moviesAreLoading = (state = false, action) => {
    switch (action.type) {
        case actions.movie.MOVIES_ARE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export const movies = (state = [], action) => {
    switch (action.type) {
        case actions.movie.LOAD_MOVIES_SUCCESS:
            return action.movies;
        default:
            return state;
    }
}

export const loadMovieDetailsError = (state = false, action) => {
    switch (action.type) {
        case actions.movie.LOAD_MOVIE_DETAILS_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
}

export const movieDetailsAreLoading = (state = false, action) => {
    switch (action.type) {
        case actions.movie.MOVIE_DETAILS_ARE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export const movie = (state = {
    id: null,
    title: null,
    overview: null,
    poster: null
  }, action) => {
    switch (action.type) {
        case actions.movie.LOAD_MOVIE_DETAILS_SUCCESS:
            return action.movie;
        default:
            return state;
    }
}
