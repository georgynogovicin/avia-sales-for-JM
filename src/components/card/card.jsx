import React from 'react';
import PropTypes from 'prop-types';
import duration from './format';

import classes from './card.module.scss';

const Card = ({ carrier, price, segments: [there, back] }) => {
  const cardDate = (date) => {
    const arr = date.split('T');
    const day = arr[0];
    const time = arr[1].split('.')[0];
    return `${day} ${time}`;
  };

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
            <th>{there.stops.length} пересадки</th>
          </tr>
          <tr>
            <td>{cardDate(there.date)}</td>
            <td>{duration(there.duration)}</td>
            <td>HKG, JNB</td>
          </tr>
          <tr>
            <th>
              {back.origin} – {back.destination}
            </th>
            <th>В пути</th>
            <th>{back.stops.length} пересадки</th>
          </tr>
          <tr>
            <td>10:45 – 08:00</td>
            <td>{duration(back.duration)}</td>
            <td>HKG, JNB</td>
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
