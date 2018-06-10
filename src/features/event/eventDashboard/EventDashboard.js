import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import EventForm from '../eventForm/EventForm';
import cuid from 'cuid'

const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'http://thecatapi.com/api/images/get?format=src&results_per_page=20',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'http://thecatapi.com/api/images/get?format=src&results_per_page=20'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'http://thecatapi.com/api/images/get?format=src&results_per_page=22'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'http://thecatapi.com/api/images/get?format=src&results_per_page=21',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'http://thecatapi.com/api/images/get?format=src&results_per_page=21'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'http://thecatapi.com/api/images/get?format=src&results_per_page=22'
      }
    ]
  }
]


class EventDashboard extends Component {
    state = {
      events: eventsDashboard,
      isOpen: false,

    };

  handleFormOpen = () => {
    this.setState({
      isOpen: true
    })
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    })
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    })
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
            <EventList events={this.state.events}/>
        </Grid.Column>
        <Grid.Column width={6}>
            
            <Button onClick={this.handleFormOpen} positive content='Create Event' />
            { this.state.isOpen && 
         <EventForm createEvent={this.handleCreateEvent} handleCancel={this.handleCancel}/> }
        </Grid.Column>
      </Grid>
    )
  }
}
export default EventDashboard;