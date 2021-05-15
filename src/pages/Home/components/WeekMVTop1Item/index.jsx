import React from 'react';
import WeekMVTop1Number from '../WeekMVTop1Number';
import WeekMVTop1TextBox from '../WeekMVTop1TextBox';
import './style.scss';

const WeekMVTop1Item = ({ number, song, singer }) => {
  return (
    <div className='week-mv-top-1-item'>
      <WeekMVTop1Number number={number} />
      <WeekMVTop1TextBox song={song} singer={singer} />
    </div>
  );
};

export default WeekMVTop1Item;
