import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import moment from 'moment'

class MessageList extends Component {
  componentWillUpdate() {
    var node = ReactDOM.findDOMNode(this);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      var node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight
    }
  }

  render () {
    const { messages } = this.props;

    return (
      <ul id="message-list">
        {
          messages.map(function (message) {
            var sentAt = moment(message.sentAt).format('MMMM DD HH:mm:ss');
            var innerHTML = `${message.username} @ ${ sentAt } says: ${ message.text }`;
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
