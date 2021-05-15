import React from 'react';
import WeekMVTop1Song from '../WeekMVTop1Song';
import WeekMVTop1Singer from '../WeekMVTop1Singer';
import './style.scss';

const WeekMVTop1TextBox = ({ song, singer }) => {
  return (
    <div className='week-mv-top-1-text-box'>
      <WeekMVTop1Song song={song} />
      <WeekMVTop1Singer singer={singer} />
    </div>
  );
};

export default WeekMVTop1TextBox;
