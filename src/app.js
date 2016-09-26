import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { listenToAuth } from './actions/auth';
import store from './store';
import Room from './components/room';

export class App extends Component {
  componentWillMount() {
    store.dispatch(listenToAuth());
  }
  render () {
    return (
      <Provider store={store}>
        <Room />
      </Provider>
    );
  }
};
