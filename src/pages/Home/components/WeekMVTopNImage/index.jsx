import React from 'react';
import './style.scss';

const WeekMVTopNImage = ({ img }) => {
  return (
    <>
      <img className='week-top-n-image' alt='week-mv-top-n' src={img} />
    </>
  );
};

export default WeekMVTopNImage;
