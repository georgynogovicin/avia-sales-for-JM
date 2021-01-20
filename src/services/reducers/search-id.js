import { GET_SEARCH_ID } from '../actions';

const initialState = null;

const searchId = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SEARCH_ID:
      return payload;

    default:
      return state;
  }
};

export default searchId;
