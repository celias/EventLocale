import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { deleteEvent } from '../eventActions';

// map state
const mapState = state => ({
	events: state.events
});

// action creators
const actions = {
	deleteEvent
};

class EventDashboard extends Component {
	// filter method
	handleDeleteEvent = eventId => () => {
		this.props.deleteEvent(eventId);
		// const updatedEvents = this.state.events.filter(e => e.id !== eventId);
		// this.setState({
		// 	events: updatedEvents
		// });
	};

	render() {
		const { events } = this.props;
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList deleteEvent={this.handleDeleteEvent} events={events} />
				</Grid.Column>
				<Grid.Column width={6} />
			</Grid>
		);
	}
}
export default connect(mapState, actions)(EventDashboard);
