import React from 'react';
import ContentLeft from '../../../../pages/Home/components/ContentLeft';
import ContentRight from '../../../../pages/Home/components/ContentRight';

import './style.scss';

const ContentInner = () => (
  <div className='content-inner'>
    <ContentLeft />
    <ContentRight />
  </div>
);

export default ContentInner;
