import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
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
    const { messages } = this.props;

    return (
      <article id="room">
        <ul id="messages">
          {
            messages.map(function (message) {
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
  messages: PropTypes.array.isRequired,
  onSendMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return { messages: state.messages };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: (message) => {
      dispatch({ type: 'SEND_MESSAGE', message });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
