import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

import { createEvent, deleteEvent, updateEvent } from '../eventActions';

// map state 
const mapState = state => ({
	events: state.events
});

// action creators
const actions = {
  createEvent,
  deleteEvent,
  updateEvent
}

class EventDashboard extends Component {
	state = {
		isOpen: false,
		selectedEvent: null
	};

	handleFormOpen = () => {
		this.setState({
			selectedEvent: null,
			isOpen: true
		});
	};

	handleCancel = () => {
		this.setState({
			isOpen: false
		});
	};

	handleUpdateEvent = updatedEvent => {
		this.setState({
			events: this.state.events.map(event => {
				if (event.id === updatedEvent.id) {
					return Object.assign({}, updatedEvent);
				} else {
					return event;
				}
			}),
			isOpen: false,
			selectedEvent: null
		});
	};

	handleOpenEvent = eventToOpen => () => {
		this.setState({
			selectedEvent: eventToOpen,
			isOpen: true
		});
	};

	handleCreateEvent = newEvent => {
		newEvent.id = cuid();
		newEvent.hostPhotoURL = 'http://thecatapi.com/api/images/get?format=src&results_per_page=22';
		const updatedEvents = [...this.state.events, newEvent];
		this.setState({
			events: updatedEvents,
			isOpen: false
		});
	};

	// filter method
	handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
		// const updatedEvents = this.state.events.filter(e => e.id !== eventId);
		// this.setState({
		// 	events: updatedEvents
		// });
	};

	render() {
    const { selectedEvent } = this.state;
    const { events } = this.props;
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList
						deleteEvent={this.handleDeleteEvent}
						onEventOpen={this.handleOpenEvent}
						events={events}
					/>
				</Grid.Column>
				<Grid.Column width={6}>
					<Button onClick={this.handleFormOpen} positive content="Create Event" />
					{this.state.isOpen && (
						<EventForm
							updateEvent={this.handleUpdateEvent}
							selectedEvent={selectedEvent}
							createEvent={this.handleCreateEvent}
							handleCancel={this.handleCancel}
						/>
					)}
				</Grid.Column>
			</Grid>
		);
	}
}
export default connect(mapState, actions)(EventDashboard);
