import React, { Component, PropTypes } from 'react'
import uuid from 'node-uuid'

class Room extends Component {
  submit (e) {
    e.preventDefault();

    var message = {
      uid: uuid.v4(),
      text: this.refs.message.value,
      username: this.refs.username.value,
      sentAt: new Date()
    };

    this.refs.message.value = '';

    this.props.onSendMessage(message);
  }

  render() {
    const { value, onSendMessage } = this.props;

    return (
      <article id="room">
        <ul>
          {
            value.map(function (message) {
              var innerHTML = `${message.username} @ ${ message.sentAt } says: ${ message.text }`;
              return <li key={message.uid}>{ innerHTML }</li>;
            })
          }
        </ul>
        <form onSubmit={this.submit.bind(this)}>
          <input ref="username" type="text" placeholder="username"></input>
          <input ref="message" type="text" placeholder="Type a message..."></input>
          <input type="submit"></input>
        </form>
      </article>
    );
  }
}

Room.propTypes = {
  value: PropTypes.array.isRequired,
  onSendMessage: PropTypes.func.isRequired
};

export default Room
