import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const RankNumber = ({ number }) => {
  return <div className='rank-number'>{number}</div>;
};

RankNumber.propTypes = {
  number: PropTypes.number,
};

RankNumber.defaultProps = {
  number: 1,
};

export default RankNumber;
