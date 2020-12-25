import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import TransferFilter from '../transfer-filter';
import Tabs from '../tabs';
import CardsList from '../cards-list';
// import request from '../../services/api/request';
import { getSearchId, getTickets } from '../../services/actions';
// import addId from '../../services/helpers/addId';

import classes from './App.module.scss';

function App({ searchId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchId) {
      dispatch(getSearchId());
    }
    if (searchId) {
      dispatch(getTickets(searchId));
    }
  }, [searchId, dispatch]);

  return (
    <div className={classes.App}>
      <div className={classes.logo} />
      <TransferFilter />
      <div className={classes.App__inner}>
        <Tabs />
        <CardsList />
      </div>
    </div>
  );
}

App.propTypes = {
  searchId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    searchId: state.searchId,
  };
};

export default connect(mapStateToProps)(App);
