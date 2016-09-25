const initialState = {
  username: null,
  uid: null,
  status: 'AUTH_GUEST'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_OPEN':
      return {
        status: 'AUTH_AWAITING_RESPONSE',
        username: 'guest',
        uid: null
      };
    case 'AUTH_LOGIN':
      return {
        status: 'AUTH_LOGGED_IN',
        username: action.username,
        uid: action.uid
      };
    case 'AUTH_LOGOUT':
      return {
        status: 'AUTH_GUEST',
        username: 'guest',
        uid: null
      };
    default: return state;
  }
};
