import React from 'react';
import WeekMVTop1Image from '../WeekMVTop1Image';
import WeekMVTop1Item from '../WeekMVTop1Item';
import WeekMVTop1Overlay from '../WeekMVTop1Overlay';
import './style.scss';

const WeekMVTop1 = ({ itemTop1 }) => {
  return (
    <div className='week-mv-top-1'>
      <WeekMVTop1Image img={itemTop1.img} />
      <WeekMVTop1Overlay />
      <WeekMVTop1Item
        number={itemTop1.number}
        song={itemTop1.song}
        singer={itemTop1.singer}
      />
    </div>
  );
};

export default WeekMVTop1;
