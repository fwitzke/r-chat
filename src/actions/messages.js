import { database } from '../firebaseApp';
import uuid from 'node-uuid'

const messagesRef = database.ref('messages');

export const listenToMessages = () => {
  return (dispatch) => {
    messagesRef.off();

    messagesRef.on('child_added', (snapshot) => {
      var message = snapshot.val();
      message.sentAt = new Date(message.sentAt); // TODO: where to put this conversion?

      dispatch({ type: 'MESSAGES_ADD', message });
    });
  };
};

export const sendMessage = (text) => {
  return (dispatch, getState) => {
    const state = getState();

    const message = {
      uid: uuid.v4(),
      text,
      username: state.auth.username,
      sentAt: new Date().getTime()
    };

    messagesRef.push(message, (error) => {
      if (error) {
        console.error(`Failure sending message: ${error}`);
      }
    });
  };
};
