import React from 'react';
import CopyRight from '../CopyRight';
import License from '../License';
import './style.scss';

const FooterTextBox = () => {
  return (
    <div className='footer-text-box'>
      <CopyRight />
      <License />
    </div>
  );
};

export default FooterTextBox;
