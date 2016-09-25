import React, { Component, PropTypes } from 'react'
import uuid from 'node-uuid'

class Room extends Component {
  submit (e) {
    e.preventDefault();

    this.props.onSendMessage({
      uid: uuid.v4(),
      text: this.refs.message.value,
      username: this.refs.username.value
    });
  }

  render() {
    const { value, onSendMessage } = this.props;

    return (
      <article>
        <ul>
          {
            value.map(function (message) {
              return <li key={message.uid}>{ message.text }</li>;
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
