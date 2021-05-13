import React from 'react';
import MenuPagesItem from '../MenuPagesItem';
import './style.scss';

const MenuPagesList = () => {
  return (
    <div className='menu-pages-list'>
      <MenuPagesItem />
      <MenuPagesItem />
      <MenuPagesItem />
      <MenuPagesItem />
    </div>
  );
};

export default MenuPagesList;
