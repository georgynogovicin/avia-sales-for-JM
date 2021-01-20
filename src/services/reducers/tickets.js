import { SET_TICKETS, SORT_BY_PRICE, SORT_BY_DURATION } from '../actions';

const initialState = [];

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKETS: {
      return [...state, ...action.payload];
    }

    case SORT_BY_PRICE: {
      const sorted = state.slice().sort((first, second) => first.price - second.price);
      return sorted;
    }

    case SORT_BY_DURATION: {
      const sorted = state.slice().sort((first, second) => first.segments[0].duration - second.segments[0].duration);
      return sorted;
    }

    default:
      return state;
  }
};

export default tickets;
