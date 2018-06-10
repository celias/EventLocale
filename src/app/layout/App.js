import React, { Component } from 'react';
import NavBar from '../../features/nav/navBar/NavBar';
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventDashboard />
        <NavBar />
      </div>
    );
  }
}

export default App;