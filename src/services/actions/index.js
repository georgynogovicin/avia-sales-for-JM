import addId from '../helpers/addId';
import request from '../api/request';

const addIdFn = addId();

export const setCheap = () => {
  return {
    type: 'CHEAP',
  };
};

export const setFast = () => {
  return {
    type: 'FAST',
  };
};

export const setFilterAll = () => {
  return {
    type: 'TRANSFER-FILTER-ALL',
  };
};

export const setFilterWithout = () => {
  return {
    type: 'TRANSFER-FILTER-WITHOUT',
  };
};

export const setFilterOneTransfer = () => {
  return {
    type: 'TRANSFER-FILTER-ONE-TRANSFER',
  };
};

export const setFilterTwoTransfers = () => {
  return {
    type: 'TRANSFER-FILTER-TWO-TRANSFERS',
  };
};

export const setFilterThreeTransfers = () => {
  return {
    type: 'TRANSFER-FILTER-THREE-TRANSFERS',
  };
};

export const setSearchId = (payload) => {
  return {
    type: 'GET-SEARCH-ID',
    payload,
  };
};

export const setTickets = (payload) => {
  return {
    type: 'SET-TICKETS',
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: 'SET-ERROR',
    payload,
  };
};

export const sortByPrice = () => {
  return {
    type: 'SORT-BY-PRICE',
  };
};

export const sortByDuration = () => {
  return {
    type: 'SORT-BY-DURATION',
  };
};

export const setLoadingStatus = (payload) => {
  return {
    type: 'LOADING-IS-FINISH',
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
