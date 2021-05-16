import React from 'react';
import ChildMenuLink from '../ChildMenuLink';
import ChildMenuTitle from '../ChildMenuTitle';
import './style.scss';

const ChildMenuList = ({ title, list }) => {
  const renderList = list.map((item) => <ChildMenuLink link={item} />);
  return (
    <div className='child-menu-list'>
      <ChildMenuTitle title={title} />
      {renderList}
    </div>
  );
};

export default ChildMenuList;
