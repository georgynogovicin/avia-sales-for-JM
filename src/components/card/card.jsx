import React from 'react';

import './card.scss';

const Card = () => {
  return (
    <li className="card">
      <div className="card__header">
        <span className="card__price">13400р</span>
        <span className="card__IATA">
          <img width="110" heigth="36" src="https://pics.avs.io/99/36/SU.png" alt="AER" />
        </span>
      </div>
      <table className="card__info">
        <tbody>
          <tr>
            <th>MOW – HKT</th>
            <th>В пути</th>
            <th>2 пересадки</th>
          </tr>
          <tr>
            <td>10:45 – 08:00</td>
            <td>21ч 15м</td>
            <td>HKG, JNB</td>
          </tr>
          <tr>
            <th>MOW – HKT</th>
            <th>В пути</th>
            <th>1 пересадки</th>
          </tr>
          <tr>
            <td>10:45 – 08:00</td>
            <td>21ч 15м</td>
            <td>HKG, JNB</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

export default Card;
