import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import Room from './components/room'
import reducer from './reducers'

let store = createStore(reducer);

const rootElement = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Room
      value={store.getState()}
      onSendMessage={(message) => store.dispatch({ type: 'SEND_MESSAGE', message }) }
    />,
    rootElement
  )
}

render();
store.subscribe(render);
