import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.css'

import App from './components/App'
import EventPage from './components/EventPage'
import ContactPage from './components/ContactPage'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={ App }/>
            <Route path="/events" component={ EventPage } />
            <Route path="/contact" component={ ContactPage } />
        </Switch>
    </Router>,
    document.getElementById('root')
);
