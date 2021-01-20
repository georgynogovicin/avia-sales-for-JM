import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClassNames from 'classnames';
import { setCheap, setFast, sortByPrice, sortByDuration } from '../../services/actions';

import classes from './tabs.module.scss';

const Tabs = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.priceFilter);

  const cheapClass = ClassNames({
    [classes.tabs__item]: true,
    [classes['tabs__item--active']]: sort === 'cheap',
  });

  const fastClass = ClassNames({
    [classes.tabs__item]: true,
    [classes['tabs__item--active']]: sort === 'fast',
  });

  const onClickCheap = () => {
    dispatch(setCheap());
    dispatch(sortByPrice());
  };

  const onClickFast = () => {
    dispatch(setFast());
    dispatch(sortByDuration());
  };

  return (
    <nav className={classes.tabs}>
      <div className={cheapClass} onClick={onClickCheap} onKeyDown={() => {}} role="button" tabIndex={-1}>
        Самый дешевый
      </div>
      <div className={fastClass} onClick={onClickFast} onKeyDown={() => {}} role="button" tabIndex={-2}>
        Самый быстрый
      </div>
    </nav>
  );
};

export default Tabs;
