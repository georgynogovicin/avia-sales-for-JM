import { combineReducers } from 'redux';
import priceFilter from './price-filter';
import transferFilter from './transfer-filter';
import searchId from './search-id';
import tickets from './tickets';
import errorView from './error';
import loadingStatus from './loadingStatus';

const rootReducer = combineReducers({ priceFilter, transferFilter, searchId, tickets, errorView, loadingStatus });

export default rootReducer;
