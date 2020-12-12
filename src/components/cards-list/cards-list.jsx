import React from 'react';
import Card from '../card';

import classes from './cards-list.module.scss';

const CardsList = () => {
  return (
    <ul className={classes['cards-list']}>
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
