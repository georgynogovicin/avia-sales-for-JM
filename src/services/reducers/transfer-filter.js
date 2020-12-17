const initialState = {
  all: true,
  without: true,
  oneTransfer: true,
  twoTransfers: true,
  threeTransfers: true,
};

const transferFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSFER-FILTER-ALL': {
      const newState = !state.all;

      return {
        all: newState,
        without: newState,
        oneTransfer: newState,
        twoTransfers: newState,
        threeTransfers: newState,
      };
    }

    case 'TRANSFER-FILTER-WITHOUT': {
      const transferWithout = !state.without;

      const allState = !!(transferWithout && state.oneTransfer && state.twoTransfers && state.threeTransfers);

      return {
        ...state,
        without: transferWithout,
        all: allState,
      };
    }

    case 'TRANSFER-FILTER-ONE-TRANSFER': {
      const newOneTransfer = !state.oneTransfer;

      const allState = !!(newOneTransfer && state.without && state.twoTransfers && state.threeTransfers);

      return {
        ...state,
        oneTransfer: newOneTransfer,
        all: allState,
      };
    }

    case 'TRANSFER-FILTER-TWO-TRANSFERS': {
      const newTwoTransfers = !state.twoTransfers;

      const allState = !!(newTwoTransfers && state.without && state.oneTransfers && state.threeTransfers);

      return {
        ...state,
        twoTransfers: newTwoTransfers,
        all: allState,
      };
    }

    case 'TRANSFER-FILTER-THREE-TRANSFERS': {
      const newThreeTransfers = !state.threeTransfers;

      const allState = !!(newThreeTransfers && state.without && state.oneTransfers && state.twoTransfers);

      return {
        ...state,
        threeTransfers: newThreeTransfers,
        all: allState,
      };
    }

    default:
      return state;
  }
};

export default transferFilter;
