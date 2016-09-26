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
            var sentAt = moment(message.sentAt).format('HH:mm:ss');

            return <li className="message" key={message.uid}>
                     <strong>{ message.username }</strong>
                     <small>{ sentAt} </small>
                     <br/>
                     <span>{ message.text }</span>
                   </li>;
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
