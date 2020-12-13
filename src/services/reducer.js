const initialState = {
  sort: 'cheap',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHEAP':
      return { ...state, sort: 'cheap' };

    case 'FAST':
      return { ...state, sort: 'fast' };
    default:
      return state;
  }
};

export default reducer;
