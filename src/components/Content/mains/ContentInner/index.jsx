import React from 'react';
import ContentBottom from '../../../../pages/Home/mains/ContentBottom';
import ContentTop from '../../../../pages/Home/mains/ContentTop';

import './style.scss';

const ContentInner = () => (
  <div className='content-inner'>
    <ContentTop />
    <ContentBottom />
  </div>
);

export default ContentInner;
