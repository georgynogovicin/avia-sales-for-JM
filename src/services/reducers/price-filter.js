const initialState = {
  sort: 'cheap',
};

const priceFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'CHEAP':
      return { sort: 'cheap' };

    case 'FAST':
      return { sort: 'fast' };

    default:
      return state;
  }
};

export default priceFilter;
