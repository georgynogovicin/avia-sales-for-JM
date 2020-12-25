const initialState = '';

const searchId = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET-SEARCH-ID':
      return payload;

    default:
      return state;
  }
};

export default searchId;
