import React from 'react';
import WeekMVTopNItemLeft from '../WeekMVTopNItemLeft';
import WeekMVTopNItemRight from '../WeekMVTopNItemRight';

import './style.scss';
const WeekMVTopNItem = ({ item }) => {
  return (
    <div className='week-mv-top-n-item'>
      <WeekMVTopNItemLeft img={item.img} number={item.number} />
      <WeekMVTopNItemRight song={item.song} singer={item.singer} />
    </div>
  );
};

export default WeekMVTopNItem;
