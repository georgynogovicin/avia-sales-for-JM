const initialState = {
  tickets: [],
};

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-TICKETS':
      return {
        tickets: action.payload,
      };

    default:
      return state;
  }
};

export default tickets;
