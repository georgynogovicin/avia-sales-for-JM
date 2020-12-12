import React from 'react';
import TransferFilter from '../transfer-filter';
import Tabs from '../tabs';
import CardsList from '../cards-list';

import classes from './App.module.scss';

function App() {
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
