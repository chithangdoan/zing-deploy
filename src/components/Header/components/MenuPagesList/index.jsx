import React from 'react';
import MenuPagesItem from '../MenuPagesItem';
import './style.scss';

const listItem = ['MP3', 'NEWS', 'TV', 'ZALO PC'];

const renderList = listItem.map((item) => <MenuPagesItem item={item} />);
const MenuPagesList = () => {
  return <div className='menu-pages-list'>{renderList}</div>;
};

export default MenuPagesList;
