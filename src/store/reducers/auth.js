const initialState = {
  status: 'AUTH_GUEST',
  uid: null,
  username: null,
  avatar: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_OPEN':
      return Object.assign({}, initialState, { status: 'AUTH_AWAITING_RESPONSE' });
    case 'AUTH_LOGIN':
      return {
        status: 'AUTH_LOGGED_IN',
        username: action.username,
        uid: action.uid,
        avatar: action.avatar
      };
    case 'AUTH_LOGOUT':
      return initialState;
    default: return state;
  }
};
