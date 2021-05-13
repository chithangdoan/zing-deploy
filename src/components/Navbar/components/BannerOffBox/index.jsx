import React from 'react';
import BannerOffIcon from '../BannerOffIcon';
import BannerOffName from '../BannerOffName';
import './style.scss';

const BannerOffBox = () => {
  return (
    <div className='banner-off-box'>
      <BannerOffIcon />
      <BannerOffName />
    </div>
  );
};

export default BannerOffBox;
