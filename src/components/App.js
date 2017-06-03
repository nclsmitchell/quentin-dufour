import React, { Component, PropTypes } from 'react'
import '../app.css'

import Nav from './Nav'
import PortraitsGrid from './PortraitsGrid'

class PortraitsPage extends Component {

    render() {
        return (
            <div className="App">
                <Nav />
                <PortraitsGrid />
            </div>
        )
    }
}

PortraitsPage.contextTypes = {
    router: PropTypes.object.isRequired
}

export default PortraitsPage
