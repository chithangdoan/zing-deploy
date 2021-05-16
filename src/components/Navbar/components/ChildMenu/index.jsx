import React from 'react';
import ChildMenuList from '../ChildMenuList';
import './style.scss';

const ChildMenu = ({ sub }) => {
  const renderList = sub.map((item) => (
    <ChildMenuList title={item.title} list={item.name} />
  ));
  return <div className='child-menu'>{renderList}</div>;
};

export default ChildMenu;
