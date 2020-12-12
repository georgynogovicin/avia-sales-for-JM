import React from 'react';

import './transfer-filter.scss';

const TransferFilter = () => {
  return (
    <aside className="transfer-filter">
      <h2 className="transfer-filter__header">Количество пересадок</h2>
      <div className="option">
        <label className="check">
          <input type="checkbox" className="check__input" />
          <span className="check__box" />
          Все
        </label>
      </div>
      <div className="option">
        <label className="check">
          <input type="checkbox" className="check__input" />
          <span className="check__box" />
          Без пересадок
        </label>
      </div>
      <div className="option">
        <label className="check">
          <input type="checkbox" className="check__input" />
          <span className="check__box" />1 пересадка
        </label>
      </div>
      <div className="option">
        <label className="check">
          <input type="checkbox" className="check__input" />
          <span className="check__box" />2 пересадки
        </label>
      </div>
      <div className="option">
        <label className="check">
          <input type="checkbox" className="check__input" />
          <span className="check__box" />3 пересадки
        </label>
      </div>
    </aside>
  );
};

export default TransferFilter;
