import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid'

const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Fiesta Market',
    date: '2018-03-27',
    category: 'culture',
    description:
      'AvoCATos and Catnip!',
    city: '?, TX',
    venue: "Fiesta Market, ?",
    hostedBy: 'Senor Bob',
    hostPhotoURL: 'http://thecatapi.com/api/images/get?format=src&results_per_page=20',
    attendees: [
      {
        id: 'a',
        name: 'Senor Bob',
        photoURL: 'http://thecatapi.com/api/images/get?format=src&results_per_page=20'
      },
      {
        id: 'b',
        name: 'Tom Cat',
        photoURL: 'http://thecatapi.com/api/images/get?format=src&results_per_page=22'
      }
    ]
  },
  {
    id: '2',
    title: "Liquor n' Cats",
    date: '2018-03-28',
    category: 'drinks',
    description: 'Come out and have shots and pet kitties.',
    city: 'Haslet, TX',
    venue: 'The nearest liquor store',
    hostedBy: 'Tom Cat',
    hostPhotoURL: 'http://thecatapi.com/api/images/get?format=src&results_per_page=21',
    attendees: [
      {
        id: 'b',
        name: 'Tom Cat',
        photoURL: 'http://thecatapi.com/api/images/get?format=src&results_per_page=21'
      },
      {
        id: 'a',
        name: 'Senor Bob',
        photoURL: 'http://thecatapi.com/api/images/get?format=src&results_per_page=22'
      }
    ]
  }
]


class EventDashboard extends Component {
    state = {
      events: eventsDashboard,
      isOpen: false,
      selectedEvent: null
    };

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    })
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    })
  };

  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if(event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent)
        } else {
          return event
        }
      }),
      isOpen: false,
      selectedEvent: null
    })
  }

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
  }

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = 'http://thecatapi.com/api/images/get?format=src&results_per_page=22';
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    })
  };

    // filter method
    handleDeleteEvent = (eventId) => () => {
      const updatedEvents = this.state.events.filter(e => e.id !== eventId);
      this.setState({
        events: updatedEvents
      })
    };

  render() {
    const {selectedEvent} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
            <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={this.state.events}/>
        </Grid.Column>
        <Grid.Column width={6}>
            
            <Button onClick={this.handleFormOpen} positive content='Create Event' />
            { this.state.isOpen && 
         <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCancel={this.handleCancel}/> }
        </Grid.Column>
      </Grid>
    )
  }
}
export default EventDashboard;