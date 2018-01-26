import axios from 'axios';
import constants from './constants';

class MovieApi {
  static mapMovie(movie) {
    let mapped = {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster: movie.poster_path ? `${constants.img_base}${movie.poster_path}` : null,
      video: movie.videos && movie.videos.results.length > 0 ? `${constants.video_base}${movie.videos.results[0].key}` : null
    };
    return mapped;
  }

  static getPopularMovies() {
    return axios.get(`${constants.base}/movie/popular?api_key=${constants.key}&language=${constants.lang}&page=${constants.default_page}`)
       .then((response) => {
         if(response.status === 200) {
           return response.data.results.map(movie => this.mapMovie(movie));
         }
         return response;
     });
  }

  static searchMovies(query) {
    return axios.get(`${constants.base}/search/movie?api_key=${constants.key}&query=${query}`)
       .then((response) => {
         if(response.status === 200) {
           return response.data.results.map(movie => this.mapMovie(movie));
         }
         return response;
     });
  }

  static getMovieDetails(id) {
    return axios.get(`${constants.base}/movie/${id}?api_key=${constants.key}&language=${constants.lang}&append_to_response=videos`)
       .then((response) => {
         if(response.status === 200) {
           return this.mapMovie(response.data);
         }
     });
  }
}

export default MovieApi;
