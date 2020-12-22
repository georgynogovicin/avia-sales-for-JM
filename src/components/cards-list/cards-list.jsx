import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../card';

import classes from './cards-list.module.scss';

const CardsList = ({ tickets }) => {
  const cards = tickets.tickets.map((ticket) => {
    const { id, ...props } = ticket;
    console.log(props);
    return <Card key={id} {...props} />;
  });

  return <ul className={classes['cards-list']}>{cards}</ul>;
};
const mapDispatchToProps = (state) => {
  return {
    tickets: state.tickets,
  };
};

CardsList.propTypes = {
  tickets: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapDispatchToProps)(CardsList);
