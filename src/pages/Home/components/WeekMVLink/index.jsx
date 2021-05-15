import React from 'react';
import WeekMVLinkIcon from '../WeekMVLinkIcon';
import WeekMVLinkName from '../WeekMVLinkName';
import WeekMVLinkPlay from '../WeekMVLinkPlay';

import './style.scss';

const WeekMVLink = () => {
  return (
    <div className='week-mv-link'>
      <div className='week-mv-link__left'>
        <WeekMVLinkName />
        <WeekMVLinkIcon />
      </div>

      <div>
        <WeekMVLinkPlay />
      </div>
    </div>
  );
};

export default WeekMVLink;
