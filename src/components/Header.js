import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

class Header extends Component {
    render = () => (
        <div className="ui container">
            <h2 className="ui header">
                <i className="music icon"></i>
                <div className="content">
                    Favorite Music
                </div>
            </h2>
            <div className="ui secondary pointing menu">
                <Link to="/bands" activeClassName="active" className="item">
                    Bands
                </Link>
                <Link to="/albums" activeClassName="active" className="item">
                    Albums
                </Link>
            </div>
        </div>
    )
}

export default Header;
