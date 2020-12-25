const initialState = {
  tickets: [],
};

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-TICKETS':
      return {
        tickets: action.payload,
      };

    case 'SORT-BY-PRICE': {
      const sorted = state.tickets.slice().sort((a, b) => a.price - b.price);
      return {
        tickets: sorted,
      };
    }

    case 'SORT-BY-DURATION': {
      const sorted = state.tickets.slice().sort((a, b) => a.segments[0].duration - b.segments[0].duration);
      return {
        tickets: sorted,
      };
    }

    // case 'SORT-BY-ONE-TRANSFER': {
    //   const sorted
    // }

    default:
      return state;
  }
};

export default tickets;
