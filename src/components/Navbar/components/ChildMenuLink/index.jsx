import React from 'react';
import './style.scss';

const ChildMenuLink = ({ link }) => {
  return (
    <div className='child-menu-link'>
      <a>{link}</a>
    </div>
  );
};

export default ChildMenuLink;
