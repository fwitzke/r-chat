import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'node-uuid'

class MessageForm extends Component {
  submit (e) {
    e.preventDefault();

    const { dispatch } = this.props;

    var message = {
      uid: uuid.v4(),
      text: this.refs.message.value,
      username: this.refs.username.value,
      sentAt: new Date()
    };

    this.refs.message.value = '';

    dispatch({ type: 'SEND_MESSAGE', message });
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input ref="username" type="text" placeholder="username"></input>
        <input ref="message" type="text" placeholder="Type a message..."></input>
        <input type="submit"></input>
      </form>
    );
  }
}

export default connect()(MessageForm);
