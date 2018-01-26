import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <nav className="navbar navbar-default ma-navbar" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-items" aria-expanded="false">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="menu-items">
                        <ul className="nav navbar-nav">
                            <li><NavLink exact to="/movies" activeClassName="active">Movies</NavLink></li>
                            <li><NavLink to="/tv-shows" activeClassName="active">TV Shows</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  );
};

export default Header;
