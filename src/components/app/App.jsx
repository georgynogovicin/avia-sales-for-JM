import React from 'react';
import TransferFilter from '../transfer-filter';
import Tabs from '../tabs';
import CardsList from '../cards-list';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="logo" />
      <TransferFilter />
      <div className="App__inner">
        <Tabs />
        <CardsList />
      </div>
    </div>
  );
}

export default App;
