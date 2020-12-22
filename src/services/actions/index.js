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
