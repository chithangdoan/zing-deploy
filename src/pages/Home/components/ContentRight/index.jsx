import React from 'react';
import WeekMV from '../../components/WeekMV';
import HotTopic from '../HotTopic';
import YourFavouriteSong from '../YourFavouriteSong';

const ContentRight = () => {
  return (
    <div className='content-right'>
      <YourFavouriteSong />
      <HotTopic />
      <HotTopic />
      <WeekMV />
      <HotTopic />
      <HotTopic />
    </div>
  );
};

export default ContentRight;
