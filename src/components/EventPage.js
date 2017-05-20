import React, { Component, PropTypes } from 'react'
import '../app.css';

import Nav from './Nav'
import EventGrid from './EventGrid'

class EventPage extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <EventGrid />
      </div>
    )
  }
}

EventPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default EventPage;
