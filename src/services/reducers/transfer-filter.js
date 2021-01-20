import { CHANGE_FILTER } from '../actions';

const initialState = [
  {
    label: 'Все',
    id: 'all',
    status: false,
    filterValue: null,
  },
  {
    label: 'Без пересадок',
    id: 'without',
    status: true,
    filterValue: 0,
  },
  {
    label: '1 пересадка',
    id: 'one-transfer',
    status: false,
    filterValue: 1,
  },
  {
    label: '2 пересадка',
    id: 'two-transfers',
    status: false,
    filterValue: 2,
  },
  {
    label: '3 пересадка',
    id: 'three-transfers',
    status: false,
    filterValue: 3,
  },
];

const changeFilter = (id, state) => {
  if (id === 'all') {
    const idx = state.findIndex((item) => item.id === id);
    const { status } = state[idx];
    const newState = state.map((item) => ({ ...item, status: !status }));

    return newState;
  }

  const newState = state.map((item) => {
    return item.id === id ? { ...item, status: !item.status } : item;
  });

  const statusCounter = newState.reduce((acc, item) => {
    const count = item.id !== 'all' && item.status ? 1 : 0;
    return acc + count;
  }, 0);

  if (statusCounter === newState.length - 1) {
    return newState.map((item) => {
      return item.id === 'all' ? { ...item, status: true } : item;
    });
  }

  if (statusCounter !== newState.length - 1) {
    return newState.map((item) => {
      return item.id === 'all' ? { ...item, status: false } : item;
    });
  }

  return newState;
};

const transferFilter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      const newState = changeFilter(action.payload, state);
      return [...newState];
    }

    default:
      return state;
  }
};

export default transferFilter;
