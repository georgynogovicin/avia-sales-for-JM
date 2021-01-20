import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../card';
import ticketsFilter from '../../services/helpers/ticketsFilter';

import classes from './cards-list.module.scss';

const CardsList = () => {
  const [cardsToShow, setCardsToShow] = useState(5);

  const tickets = useSelector((state) => state.tickets);
  const filters = useSelector((state) => state.transferFilter);
  const error = useSelector((state) => state.errorView);

  const filteredTickets = tickets.filter((item) => ticketsFilter(filters, item));

  const cards = filteredTickets.map((ticket) => {
    const { id, ...props } = ticket;

    return <Card key={id} {...props} />;
  });

  const notFound = !cards.length ? (
    <li className={classes['not-found']}>Рейсов, подходящих под заданные фильтры, не найдено</li>
  ) : null;
  const errorView = error.length ? <div className={classes.error}>Ошибка</div> : null;

  return (
    <ul className={classes['cards-list']}>
      {cards.slice(0, cardsToShow)}
      {errorView}
      {notFound}
      {cards.length > 0 ? (
        <button type="button" className={classes['show-more']} onClick={() => setCardsToShow(cardsToShow + 5)}>
          Показать еще
        </button>
      ) : null}
    </ul>
  );
};

export default CardsList;
