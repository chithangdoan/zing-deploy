import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import './style.scss';

const HomeButton = () => {
  return (
    <div className='home-button'>
      <HomeOutlined style={{ fontSize: '18px' }} />
    </div>
  );
};

export default HomeButton;
