import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import * as actions from '../../services/actions';

import classes from './tabs.module.scss';

const Tabs = ({ sort, setCheap, setFast }) => {
  const cheapClass = ClassNames({
    [classes.tabs__item]: true,
    [classes['tabs__item--active']]: sort === 'cheap',
  });

  const fastClass = ClassNames({
    [classes.tabs__item]: true,
    [classes['tabs__item--active']]: sort === 'fast',
  });

  return (
    <nav className={classes.tabs}>
      <div className={cheapClass} onClick={setCheap} onKeyDown={() => {}} role="button" tabIndex={-1}>
        Самый дешевый
      </div>
      <div className={fastClass} onClick={setFast} onKeyDown={() => {}} role="button" tabIndex={-2}>
        Самый быстрый
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    sort: state.priceFilter.sort,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { setFast, setCheap } = bindActionCreators(actions, dispatch);

  return {
    setFast,
    setCheap,
  };
};

Tabs.propTypes = {
  setFast: PropTypes.func.isRequired,
  setCheap: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
