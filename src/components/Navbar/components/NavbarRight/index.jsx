import React from 'react';
import BannerOffBox from '../BannerOffBox';
import UploadButton from '../UploadButton';
import './style.scss';

const NavbarRight = () => {
  return (
    <div className='navbar-right'>
      <BannerOffBox />
      <UploadButton />
    </div>
  );
};

export default NavbarRight;
