export default function reducer (state = [], action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};
