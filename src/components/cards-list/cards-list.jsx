import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../card';

import classes from './cards-list.module.scss';

const CardsList = ({ tickets, filters, error }) => {
  const ticketsFilter = ({ all, without, oneTransfer, twoTransfers, threeTransfers }, item) => {
    if (
      (item.segments[0].stops.length === 0 && without) ||
      (item.segments[0].stops.length === 1 && oneTransfer) ||
      (item.segments[0].stops.length === 2 && twoTransfers) ||
      (item.segments[0].stops.length === 3 && threeTransfers) ||
      all
    ) {
      return true;
    }

    return false;
  };

  const filteredTickets = tickets.filter((item) => ticketsFilter(filters, item));
  const cards = filteredTickets.slice(0, 10).map((ticket) => {
    const { id, ...props } = ticket;
    return <Card key={id} {...props} />;
  });

  const notFound = !cards.length ? (
    <li className={classes['not-found']}>Рейсов, подходящих под заданные фильтры, не найдено</li>
  ) : null;
  const errorView = error.length ? <div className={classes.error}>Ошибка</div> : null;

  const showMore = () => {
    console.log('show more tickets');
  };

  return (
    <ul className={classes['cards-list']}>
      {cards}
      {errorView}
      {notFound}
      <button type="button" onClick={showMore}>
        Показать еще
      </button>
    </ul>
  );
};
const mapDispatchToProps = (state) => {
  return {
    tickets: state.tickets,
    filters: state.transferFilter,
    error: state.errorView,
  };
};

CardsList.propTypes = {
  tickets: PropTypes.instanceOf(Object).isRequired,
  filters: PropTypes.instanceOf(Object).isRequired,
  error: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapDispatchToProps)(CardsList);
