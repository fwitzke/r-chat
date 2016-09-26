import * as firebase from 'firebase';
import { auth } from '../firebaseApp';

import { listenToMessages } from './messages';

export const listenToAuth = () => {
  return (dispatch, getState) => {
    auth.onAuthStateChanged((authData) => {
      if (authData) {
        dispatch({
          type: 'AUTH_LOGIN',
          uid: authData.uid,
          username: authData.displayName,
          avatar: authData.photoURL
        });

        const listenToMessagesDispatcher = listenToMessages();
        listenToMessagesDispatcher(dispatch, getState);
      } else {
        if (getState().auth.status !== 'AUTH_GUEST') {
          dispatch({ type: 'AUTH_LOGOUT' });
        }
      }
    });
  };
};

export const startAuth = () => {
  return (dispatch) => {
    dispatch({ type: 'AUTH_OPEN' });
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        dispatch({ type: 'AUTH_LOGIN', username: user.displayName, uid: user.uid });
      })
      .catch((error) => {
        console.error(`Login failed: ${error}`);
        dispatch({ type: 'AUTH_LOGOUT' });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: 'AUTH_LOGOUT' });
    dispatch({ type: 'MESSAGES_CLEAR' });
    auth.signOut();
  };
};
