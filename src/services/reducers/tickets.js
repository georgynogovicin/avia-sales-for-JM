const initialState = [];

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-TICKETS':
      return action.payload;

    case 'SORT-BY-PRICE': {
      const sorted = state.slice().sort((first, second) => first.price - second.price);
      return sorted;
    }

    case 'SORT-BY-DURATION': {
      const sorted = state.slice().sort((first, second) => first.segments[0].duration - second.segments[0].duration);
      return sorted;
    }

    default:
      return state;
  }
};

export default tickets;
