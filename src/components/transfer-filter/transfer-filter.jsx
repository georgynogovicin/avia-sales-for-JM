import React from 'react';

import classes from './transfer-filter.module.scss';

const TransferFilter = () => {
  return (
    <aside className={classes['transfer-filter']}>
      <h2 className={classes['transfer-filter__header']}>Количество пересадок</h2>
      <div className={classes.option}>
        <label className={classes.check}>
          <input type="checkbox" className={classes.check__input} />
          <span className={classes.check__box} />
          Все
        </label>
      </div>
      <div className={classes.option}>
        <label className={classes.check}>
          <input type="checkbox" className={classes.check__input} />
          <span className={classes.check__box} />
          Без пересадок
        </label>
      </div>
      <div className={classes.option}>
        <label className={classes.check}>
          <input type="checkbox" className={classes.check__input} />
          <span className={classes.check__box} />1 пересадка
        </label>
      </div>
      <div className={classes.option}>
        <label className={classes.check}>
          <input type="checkbox" className={classes.check__input} />
          <span className={classes.check__box} />2 пересадки
        </label>
      </div>
      <div className={classes.option}>
        <label className={classes.check}>
          <input type="checkbox" className={classes.check__input} />
          <span className={classes.check__box} />3 пересадки
        </label>
      </div>
    </aside>
  );
};

export default TransferFilter;
