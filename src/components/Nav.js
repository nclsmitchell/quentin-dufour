import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.png'

class Nav extends Component {


    render() {
        const portraitsClass = location.pathname === "/" ? "active" : ""
        const eventsClass = location.pathname.match(/^\/events/) ? "active" : ""
        const contactClass = location.pathname.match(/^\/contact/) ? "active" : ""

        return(
            <div>
                <nav className="nav">
                    <div className="nav-logo"><Link to="/"><img src={ logo } alt="Quentin Dufour - Photographe" /></Link></div>
                    <ul className="nav-list">
                        <li className={ portraitsClass }><Link to="/">Portraits</Link></li>
                        <li className={ eventsClass }><Link to="/events">Evènementiel</Link></li>
                        <li className={ contactClass }><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <nav className="nav-mobile">
                    <div className="nav-logo"><img src={ logo } alt="Quentin Dufour - Photographe" /></div>
                </nav>
            </div>
        );
    }
}

export default Nav
