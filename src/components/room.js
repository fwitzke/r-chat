import React, { Component } from 'react'

import MessageList from './message.list'
import MessageForm from './message.form'

class Room extends Component {
  render() {
    return (
      <article id="room">
        <MessageList />
        <MessageForm />
      </article>
    );
  }
}

export default Room;
