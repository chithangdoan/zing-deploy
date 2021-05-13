import React from 'react';
import HeaderLogo from '../../components/HeaderLogo';
import SearchBox from '../../components/SearchBox';
import MenuPage from '../../components/MenuPagesList';
import './style.scss';
import LoginButton from '../../components/LoginButton';

const HeaderInner = () => (
  <div className='header-inner'>
    <HeaderLogo />
    <SearchBox />
    <MenuPage />
    <LoginButton />
  </div>
);

export default HeaderInner;
