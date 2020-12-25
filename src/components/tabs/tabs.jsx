import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import * as actions from '../../services/actions';

import classes from './tabs.module.scss';

const Tabs = ({ sort, setCheap, setFast, sortByDuration, sortByPrice }) => {
  const cheapClass = ClassNames({
    [classes.tabs__item]: true,
    [classes['tabs__item--active']]: sort === 'cheap',
  });

  const fastClass = ClassNames({
    [classes.tabs__item]: true,
    [classes['tabs__item--active']]: sort === 'fast',
  });

  const onClickCheap = () => {
    setCheap();
    sortByPrice();
  };

  const onClickFast = () => {
    setFast();
    sortByDuration();
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

const mapStateToProps = (state) => {
  return {
    sort: state.priceFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { setFast, setCheap, sortByPrice, sortByDuration } = bindActionCreators(actions, dispatch);

  return {
    setFast,
    setCheap,
    sortByPrice,
    sortByDuration,
  };
};

Tabs.propTypes = {
  setFast: PropTypes.func.isRequired,
  setCheap: PropTypes.func.isRequired,
  sortByDuration: PropTypes.func.isRequired,
  sortByPrice: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
