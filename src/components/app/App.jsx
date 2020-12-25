import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TransferFilter from '../transfer-filter';
import Tabs from '../tabs';
import CardsList from '../cards-list';
import request from '../../services/api/request';
import { setSearchId, setTickets } from '../../services/actions';
import addId from '../../services/helpers/addId';

import classes from './App.module.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const addIdFn = addId();

    const getData = async () => {
      try {
        const searchId = await request.getSearchId();
        dispatch(setSearchId(searchId));

        if (searchId !== '') {
          try {
            const tickets = await request.getTickets(searchId);
            const ticketWithId = addIdFn(tickets);
            dispatch(setTickets(ticketWithId));
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [dispatch]);

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

export default App;
