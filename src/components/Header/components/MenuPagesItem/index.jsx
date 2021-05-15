import React from 'react';
import './style.scss';

const MenuPagesItem = ({ item }) => {
  return (
    <>
      <button className='menu-pages-item'>{item}</button>
    </>
  );
};

export default MenuPagesItem;
