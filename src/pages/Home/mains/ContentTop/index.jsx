import React from 'react';
import ContentLeft from '../../components/ContentLeft';
import ContentRight from '../../components/ContentRight';
import './style.scss';

const ContentTop = () => {
  return (
    <div className='content-top'>
      <ContentLeft />
      <ContentRight />
    </div>
  );
};

export default ContentTop;
