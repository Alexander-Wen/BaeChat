import { combineReducers } from 'redux';

import messages from './messages';

const initialState = {
  isFetching: false,
  lastFetched: null,
  height: 0,
}

const meta = (state = intialState, action) => {
  switch (action.type) {
    case 'START_FETCHING_MESSAGES':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVING_MESSAGES':
      return Object.assign({}, state, {
        height: action.height
      });
    default:
      return state;
  }
}

const chat = combineReducers({
  messages,
  meta,
});

export default chat;
