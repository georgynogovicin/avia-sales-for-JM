import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import TransferFilter from '../transfer-filter';
import Tabs from '../tabs';
import CardsList from '../cards-list';
import { getSearchId, getTickets } from '../../services/actions';

import classes from './App.module.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function App({ searchId, loadingStatus, tickets }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchId === '') {
      dispatch(getSearchId());
    }
    if (!loadingStatus && searchId !== '') {
      dispatch(getTickets(searchId));
    }
  }, [searchId, loadingStatus, tickets, dispatch]);

  const loader = !loadingStatus ? (
    <Loader className={classes.spinner} type="TailSpin" color="#2196f3" height={80} width={80} timeout={100000} />
  ) : null;

  return (
    <div className={classes.App}>
      <div className={classes.logo}>{loader}</div>
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
  loadingStatus: PropTypes.bool.isRequired,
  tickets: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => {
  return {
    searchId: state.searchId,
    loadingStatus: state.loadingStatus,
    tickets: state.tickets,
  };
};

export default connect(mapStateToProps)(App);
