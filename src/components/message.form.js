import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'node-uuid'

class MessageForm extends Component {
  submit (e) {
    e.preventDefault();

    const { dispatch, username } = this.props;

    var message = {
      uid: uuid.v4(),
      username,
      text: this.refs.message.value,
      sentAt: new Date()
    };

    this.refs.message.value = '';

    dispatch({ type: 'MESSAGES_SEND', message });
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input ref="message" type="text" placeholder="Type a message..."></input>
        <input type="submit"></input>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { username: state.auth.username };
};

export default connect(mapStateToProps)(MessageForm);
