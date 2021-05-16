import React from 'react';
import HomeButton from '../HomeButton';
import Separation from '../Separation';
import MyMusic from '../MyMusic';
import SongCategoryList from '../SongCategoryList';

import './style.scss';

const NavbarLeft = () => {
  return (
    <div className='navbar-left'>
      <HomeButton />
      <MyMusic />
      <Separation />
      <SongCategoryList />
    </div>
  );
};

export default NavbarLeft;
