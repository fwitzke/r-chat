import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  messages
});

export default rootReducer;
