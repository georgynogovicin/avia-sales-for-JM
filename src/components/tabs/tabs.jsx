import React from 'react';

import classes from './tabs.module.scss';

const Tabs = () => {
  return (
    <nav className={classes.tabs}>
      <div className={classes.tabs__item}>Самый дешевый</div>
      <div className={classes.tabs__item}>Самый быстрый</div>
    </nav>
  );
};

export default Tabs;
