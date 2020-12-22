const initialState = {
  searchid: '',
};

const searchId = (state = initialState, action) => {
  switch (action.type) {
    case 'GET-SEARCH-ID':
      return {
        searchId: action.payload,
      };

    default:
      return state;
  }
};

export default searchId;
