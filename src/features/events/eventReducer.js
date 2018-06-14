import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants';

const initialState = [
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
  ];

  export const createEvent = (state, payload) => {
      return [...state, Object.assign({}, payload.event)]
  }

  export const updateEvent = (state, payload) => {
      return [
          ...state.filter(event => event.id !== payload.event.id),
          Object.assign({}, payload.event)
      ]
  }

  export const deleteEvent = (state, payload) => {
      return [...state.filter(event => event.id !== payload.eventId)]
  }

  export default createReducer(initialState, {
      [CREATE_EVENT]: createEvent,
      [UPDATE_EVENT]: updateEvent,
      [DELETE_EVENT]: deleteEvent
  })