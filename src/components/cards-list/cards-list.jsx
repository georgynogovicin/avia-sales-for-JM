/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../card';

import classes from './cards-list.module.scss';

const CardsList = ({ tickets, filters }) => {
  const ticketsFilter = ({ all, without, oneTransfer, twoTransfers, threeTransfers }, item) => {
    if (
      (item.segments[0].stops.length === 0 && without) ||
      (item.segments[0].stops.length === 1 && oneTransfer) ||
      (item.segments[0].stops.length === 2 && twoTransfers) ||
      (item.segments[0].stops.length === 3 && threeTransfers) ||
      all
    )
      return true;

    return false;
  };

  const filteredTickets = tickets.filter((item) => ticketsFilter(filters, item));

  const cards = filteredTickets.slice(0, 10).map((ticket) => {
    const { id, ...props } = ticket;
    return <Card key={id} {...props} />;
  });

  return <ul className={classes['cards-list']}>{cards}</ul>;
};
const mapDispatchToProps = (state) => {
  return {
    tickets: state.tickets,
    filters: state.transferFilter,
  };
};

CardsList.propTypes = {
  tickets: PropTypes.instanceOf(Object).isRequired,
  filters: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapDispatchToProps)(CardsList);
