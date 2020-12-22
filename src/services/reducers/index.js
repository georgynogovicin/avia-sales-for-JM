import { combineReducers } from 'redux';
import priceFilter from './price-filter';
import transferFilter from './transfer-filter';
import searchId from './search-id';
import tickets from './tickets';

const rootReducer = combineReducers({ priceFilter, transferFilter, searchId, tickets });

export default rootReducer;
