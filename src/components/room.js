import React, { Component } from 'react'

import Auth from './auth'
import MessageList from './message.list'
import MessageForm from './message.form'

class Room extends Component {
  render() {
    return (
      <article id="room">
        <Auth />
        <MessageList />
        <MessageForm />
      </article>
    );
  }
}

export default Room;
