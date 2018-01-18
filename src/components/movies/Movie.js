import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MissingImage from '../common/MissingImage';

const Movie = (({movie}) => {
  let poster = null;
  if(movie.poster) {
    poster = <img className="thumbnail-image ma-thumbnail-image" src={movie.poster} alt={movie.title} />
  }
  else {
    poster = <MissingImage />;
  }
  return (
    <div className="row thumbnail ma-thumbnail">
      <Link to={`/movies/${movie.id}`}>
        {poster}
      </Link>
      <div className="caption align-center">
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
});

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;
