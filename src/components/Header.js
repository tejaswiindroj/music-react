import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

class Header extends Component {
    render = () => (
        <div className="ui container grid">
            <div className="column">
                <h2 className="ui header">
                    <i className="music icon"></i>
                    <div className="content">
                        Favorite Music
                    </div>
                </h2>
            </div>
        </div>
    )
}

export default Header;
