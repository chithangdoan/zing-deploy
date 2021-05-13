import React from 'react';
import BannerOffBox from '../../components/BannerOffBox';
import HomeButton from '../../components/HomeButton';
import MyMusic from '../../components/MyMusic';
import Separation from '../../components/Separation';
import SongCategoryList from '../../components/SongCategoryList';
import UploadButton from '../../components/UploadButton';
import './style.scss';

const NavbarInner = () => (
  <div className='navbar-inner'>
    <HomeButton />
    <MyMusic />
    <Separation />
    <SongCategoryList />
    <BannerOffBox />
    <UploadButton />
  </div>
);

export default NavbarInner;
