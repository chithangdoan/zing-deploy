import React from 'react';
import './style.scss';

const FooterItem = ({ link }) => {
  return (
    <div className='footer-item'>
      <a>{link}</a>
    </div>
  );
};

export default FooterItem;
