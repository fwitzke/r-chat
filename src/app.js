import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Room from './components/room';

export class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Room />
      </Provider>
    );
  }
};
