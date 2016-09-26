import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../actions/messages'

class MessageForm extends Component {
  submit (e) {
    e.preventDefault();

    const { dispatch, username } = this.props;
    var text = this.refs.message.value;
    this.refs.message.value = '';
    this.props.sendMessage(text);
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

const mapDispatchToProps = { sendMessage };

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
