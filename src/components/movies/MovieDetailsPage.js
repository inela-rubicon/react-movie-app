import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loadMovieDetails} from '../../actions/movieActions';
import MissingImage from '../common/MissingImage';
import Loading from '../common/Loading';
import ErrorMessage from '../common/ErrorMessage';

class MovieDetailsPage extends React.Component {
  componentDidMount() {
       this.props.loadMovieDetails(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    let nextId = nextProps.match.params.id;
    if (nextId !== this.props.match.params.id) {
        this.props.loadMovieDetails(nextId);
    }
  }

  render() {
    if (this.props.hasErrored) {
        return <ErrorMessage />;
    }
    else if (this.props.isLoading) {
      return <Loading />;
    }

    let media = null;
    if(this.props.movie.video) {
      media =
        (<div className="embed-responsive embed-responsive-16by9">
           <iframe className="embed-responsive-item" type="text/html" src={this.props.movie.video} frameBorder="0" />
        </div>);
    }
    else if(this.props.movie.poster) {
      media = <img className="thumbnail-image ma-thumbnail-image" src={this.props.movie.poster} alt={this.props.movie.title} />;
    }
    else {
      media = <MissingImage />;
    }

    return (
      <div className="col-md-8 col-md-offset-2 caption align-center">
        <h3>{this.props.movie.title}</h3>
        <div className="col-md-10 col-md-offset-1 ma-overview">{this.props.movie.overview}</div>
        <div className="col-md-10 col-md-offset-1">{media}</div>
      </div>
    );
  }
}

MovieDetailsPage.propTypes = {
  movie: PropTypes.object.isRequired,
  loadMovieDetails: PropTypes.func.isRequired,
  hasErrored: PropTypes.boolean,
  isLoading: PropTypes.boolean,
  match: React.propTypes.shape({
    params: React.propTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = (state) => {
  return {
      movie: state.movie,
      hasErrored: state.loadMovieDetailsError,
      isLoading: state.movieDetailsAreLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      loadMovieDetails: (id) => dispatch(loadMovieDetails(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
