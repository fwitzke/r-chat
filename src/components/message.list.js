import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class MessageList extends Component {
  render () {
    const { messages } = this.props;

    return (
      <ul id="message-list">
        {
          messages.map(function (message) {
            var innerHTML = `${message.username} @ ${ message.sentAt } says: ${ message.text }`;
            return <li key={message.uid}>{ innerHTML }</li>;
          })
        }
      </ul>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return { messages: state.messages };
};

export default connect(mapStateToProps)(MessageList);
