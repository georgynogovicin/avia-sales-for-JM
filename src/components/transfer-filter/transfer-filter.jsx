import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../services/actions';

import classes from './transfer-filter.module.scss';

const TransferFilter = ({
  state,
  setFilterAll,
  setFilterWithout,
  setFilterOneTransfer,
  setFilterTwoTransfers,
  setFilterThreeTransfers,
}) => {
  return (
    <aside className={classes['transfer-filter']}>
      <h2 className={classes['transfer-filter__header']}>Количество пересадок</h2>
      <div className={classes.option}>
        <label className={classes.check}>
          <input type="checkbox" className={classes.check__input} onClick={setFilterAll} checked={state.all} readOnly />
          <span className={classes.check__box} />
          Все
        </label>
      </div>
      <div className={classes.option}>
        <label className={classes.check}>
          <input
            type="checkbox"
            className={classes.check__input}
            onClick={setFilterWithout}
            checked={state.without}
            readOnly
          />
          <span className={classes.check__box} />
          Без пересадок
        </label>
      </div>
      <div className={classes.option}>
        <label className={classes.check}>
          <input
            type="checkbox"
            className={classes.check__input}
            onClick={setFilterOneTransfer}
            checked={state.oneTransfer}
            readOnly
          />
          <span className={classes.check__box} />1 пересадка
        </label>
      </div>
      <div className={classes.option}>
        <label className={classes.check}>
          <input
            type="checkbox"
            className={classes.check__input}
            onClick={setFilterTwoTransfers}
            checked={state.twoTransfers}
            readOnly
          />
          <span className={classes.check__box} />2 пересадки
        </label>
      </div>
      <div className={classes.option}>
        <label className={classes.check}>
          <input
            type="checkbox"
            className={classes.check__input}
            onClick={setFilterThreeTransfers}
            checked={state.threeTransfers}
            readOnly
          />
          <span className={classes.check__box} />3 пересадки
        </label>
      </div>
    </aside>
  );
};

TransferFilter.propTypes = {
  setFilterAll: PropTypes.func.isRequired,
  setFilterOneTransfer: PropTypes.func.isRequired,
  setFilterTwoTransfers: PropTypes.func.isRequired,
  setFilterThreeTransfers: PropTypes.func.isRequired,
  setFilterWithout: PropTypes.func.isRequired,
  state: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => {
  return {
    state: state.transferFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  const {
    setFilterAll,
    setFilterOneTransfer,
    setFilterTwoTransfers,
    setFilterThreeTransfers,
    setFilterWithout,
  } = bindActionCreators(actions, dispatch);

  return {
    setFilterAll,
    setFilterWithout,
    setFilterOneTransfer,
    setFilterTwoTransfers,
    setFilterThreeTransfers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferFilter);
