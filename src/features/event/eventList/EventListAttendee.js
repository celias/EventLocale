import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'
class EventListAttendee extends Component {
  render() {
    return (
      <List.Item>
        <Image as='a' size='mini' rounded src="http://thecatapi.com/api/images/get?format=src&results_per_page=20" />
      </List.Item>
    )
  }
}
export default EventListAttendee;