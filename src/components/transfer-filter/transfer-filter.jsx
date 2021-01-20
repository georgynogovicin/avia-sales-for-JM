import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../services/actions';

import classes from './transfer-filter.module.scss';

const TransferFilter = () => {
  const dispatch = useDispatch();

  const changeFilterHandler = (id) => {
    dispatch(changeFilter(id));
  };

  const filters = useSelector((state) => state.transferFilter).map((item) => {
    return (
      <div key={item.id} className={classes.option} onClickCapture={() => changeFilterHandler(item.id)} role="none">
        <label className={classes.check} onClick={(event) => event.preventDefault()} role="none">
          <input type="checkbox" className={classes.check__input} checked={item.status} readOnly />
          <span className={classes.check__box} />
          {item.label}
        </label>
      </div>
    );
  });

  return (
    <aside className={classes['transfer-filter']}>
      <h2 className={classes['transfer-filter__header']}>Количество пересадок</h2>
      {filters}
    </aside>
  );
};

export default TransferFilter;
