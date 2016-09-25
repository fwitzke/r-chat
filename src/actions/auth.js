import * as firebase from 'firebase';
import { auth } from '../firebaseApp';

export const startAuth = () => {
  return (dispatch) => {
    dispatch({ type: 'AUTH_OPEN' });
    const provider = new firebase.auth.GithubAuthProvider();

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
    auth.signOut();
  };
};
