import React from 'react';
import PropTypes from 'prop-types';

const Search = ({onKeyUp}) => {
  const checkKeyPress = (e) => {
    if (e.key === 'Enter') {
      onKeyUp(e.target.value);
    }
  };

  return (
    <div className="row search-control">
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" onKeyUp={checkKeyPress} />
        </div>
    </div>
  );
};

Search.propTypes = {
  onKeyUp: PropTypes.func.isRequired
};

export default Search;
