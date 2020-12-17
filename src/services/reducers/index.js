import { combineReducers } from 'redux';
import priceFilter from './price-filter';
import transferFilter from './transfer-filter';

const rootReducer = combineReducers({ priceFilter, transferFilter });

export default rootReducer;
