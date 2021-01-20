import { LOADING_IS_FINISH } from '../actions';

const initialState = false;

const loadingStatus = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_IS_FINISH:
      return true;

    default:
      return state;
  }
};

export default loadingStatus;
