import addId from '../helpers/addId';
import request from '../api/request';

// export const actionTypes = {
//   CHEAP = 'CHEAP',
//   FAST = 'FAST',
//   TRANSFER_FILTER_ALL: 'TRANSFER-FILTER-ALL',
//   TRANSFER_FILTER_WITHOUT: 'TRANSFER-FILTER-WITHOUT',
//   TRANSFER_FILTER_ONE_TRANSFER: 'TRANSFER-FILTER-ONE-TRANSFER',
//   TRANSFER_FILTER_TWO_TRANSFER: 'TRANSFER-FILTER-ONE-TRANSFER',
// };

export const CHEAP = 'CHEAP';
export const FAST = 'FAST';
// export const TRANSFER_FILTER_ALL = 'TRANSFER-FILTER-ALL';
// export const TRANSFER_FILTER_WITHOUT = 'TRANSFER-FILTER-WITHOUT';
// export const TRANSFER_FILTER_ONE_TRANSFER = 'TRANSFER-FILTER-ONE-TRANSFER';
// export const TRANSFER_FILTER_TWO_TRANSFERS = 'TRANSFER-FILTER-TWO-TRANSFERS';
// export const TRANSFER_FILTER_THREE_TRANSFERS ='TRANSFER-FILTER-THREE-TRANSFERS';
export const GET_SEARCH_ID = 'GET-SEARCH-ID';
export const SET_TICKETS = 'SET-TICKETS';
export const SET_ERROR = 'SET-ERROR';
export const SORT_BY_PRICE = 'SORT-BY-PRICE';
export const SORT_BY_DURATION = 'SORT-BY-DURATION';
export const LOADING_IS_FINISH = 'LOADING-IS-FINISH';
export const CHANGE_FILTER = 'CHANGE-FILTER';

const addIdFn = addId();

export const setCheap = () => {
  return {
    type: CHEAP,
  };
};

export const setFast = () => {
  return {
    type: FAST,
  };
};

// export const setFilterAll = () => {
//   return {
//     type: TRANSFER_FILTER_ALL,
//   };
// };

// export const setFilterWithout = () => {
//   return {
//     type: TRANSFER_FILTER_WITHOUT,
//   };
// };

// export const setFilterOneTransfer = () => {
//   return {
//     type: TRANSFER_FILTER_ONE_TRANSFER,
//   };
// };

// export const setFilterTwoTransfers = () => {
//   return {
//     type: TRANSFER_FILTER_TWO_TRANSFERS,
//   };
// };

// export const setFilterThreeTransfers = () => {
//   return {
//     type: TRANSFER_FILTER_THREE_TRANSFERS,
//   };
// };

export const changeFilter = (payload) => {
  return {
    type: CHANGE_FILTER,
    payload,
  };
};

export const setSearchId = (payload) => {
  return {
    type: GET_SEARCH_ID,
    payload,
  };
};

export const setTickets = (payload) => {
  return {
    type: SET_TICKETS,
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload,
  };
};

export const sortByPrice = () => {
  return {
    type: SORT_BY_PRICE,
  };
};

export const sortByDuration = () => {
  return {
    type: SORT_BY_DURATION,
  };
};

export const setLoadingStatus = (payload) => {
  return {
    type: LOADING_IS_FINISH,
    payload,
  };
};

export const getTickets = (searchId) => async (dispatch) => {
  try {
    const res = await request.getTickets(searchId);
    const { tickets, stop } = res;

    if (stop) {
      dispatch(setLoadingStatus());
    }

    const ticketWithId = addIdFn(tickets);
    dispatch(setTickets(ticketWithId));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const getSearchId = () => async (dispatch) => {
  try {
    const res = await request.getSearchId();
    dispatch(setSearchId(res));
  } catch (error) {
    dispatch(setError(error));
  }
};
