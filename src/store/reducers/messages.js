export default (state = [], action) => {
  switch (action.type) {
    case 'MESSAGES_ADD':
      return [
        ...state,
        action.message
      ];
    case 'MESSAGES_CLEAR':
      return [];
    default:
      return state;
  }
};
