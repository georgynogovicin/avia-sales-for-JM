import React from 'react';
import PropTypes from 'prop-types';
import * as format from './format';

import classes from './card.module.scss';

const Card = ({ carrier, price, segments: [there, back] }) => {
  return (
    <li className={classes.card}>
      <div className={classes.card__header}>
        <span className={classes.card__price}>{price}р</span>
        <span className={classes.card__IATA}>
          <img width="110" heigth="36" src={`https://pics.avs.io/99/36/${carrier}.png`} alt="AER" />
        </span>
      </div>
      <table className={classes.card__info}>
        <tbody>
          <tr>
            <th>
              {there.origin} – {there.destination}
            </th>
            <th>В пути</th>
            <th>{format.declination(there.stops.length)}</th>
          </tr>
          <tr>
            <td>{format.timeOfDeparture(there.date, there.duration)}</td>
            <td>{format.duration(there.duration)}</td>
            <td>{there.stops.join(' ')}</td>
          </tr>
          <tr>
            <th>
              {back.origin} – {back.destination}
            </th>
            <th>В пути</th>
            <th>{format.declination(back.stops.length)}</th>
          </tr>
          <tr>
            <td>{format.timeOfDeparture(back.date, back.duration)}</td>
            <td>{format.duration(back.duration)}</td>
            <td>{back.stops.join(' ')}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

Card.propTypes = {
  carrier: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  segments: PropTypes.instanceOf(Object).isRequired,
};

export default Card;
