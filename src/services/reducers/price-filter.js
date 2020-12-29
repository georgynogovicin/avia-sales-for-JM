const initialState = 'cheap';

const priceFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'CHEAP':
      return 'cheap';

    case 'FAST':
      return 'fast';

    default:
      return state;
  }
};

export default priceFilter;
