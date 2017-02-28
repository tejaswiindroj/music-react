import React, {Component} from 'react'
import {Link} from 'react-router'

class Menu extends Component {
    render = () => (
        <div className="ui secondary pointing menu container">
            <Link to="/bands" activeClassName="active" className="item">
                Bands
            </Link>
            <Link to="/albums" activeClassName="active" className="item">
                Albums
            </Link>
        </div>
    )
}

export default Menu;
