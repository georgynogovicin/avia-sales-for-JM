const initialState = false;

const loadingStatus = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING-IS-FINISH':
      return true;

    default:
      return state;
  }
};

export default loadingStatus;
