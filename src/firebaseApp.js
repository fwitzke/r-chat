import * as firebase from 'firebase';

// TODO: extract config
var config = {
  apiKey: "AIzaSyCo37kfPO9RTObRwZ2Rl4H840O4lx27MNM",
  authDomain: "r-chat-1e241.firebaseapp.com",
  databaseURL: "https://r-chat-1e241.firebaseio.com",
  messagingSenderId: "265227538210"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const database = firebase.database();
