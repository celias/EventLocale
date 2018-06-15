import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';

const event = {
  
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
  }


const EventDetailedPage = () => {
	return (
		<Grid>
			<Grid.Column width={10}>
				<EventDetailedHeader event={event} />
				<EventDetailedInfo event={event} />
				<EventDetailedChat />
			</Grid.Column>
			<Grid.Column width={6}>
				<EventDetailedSidebar attendees={event.attendees}/>
			</Grid.Column>
		</Grid>
	);
};

export default EventDetailedPage;
