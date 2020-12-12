import React from 'react';
import Card from '../card';

import './cards-list.scss';

const CardsList = () => {
  return (
    <ul className="cards-list">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  );
};

export default CardsList;
