export default (state = [], action) => {
  switch (action.type) {
    case 'MESSAGES_SEND':
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};
