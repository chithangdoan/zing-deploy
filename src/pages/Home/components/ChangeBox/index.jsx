import React from 'react';
import ChangeBoxList from '../ChangeBoxList';
import ChangeBoxName from '../ChangeBoxName';
import './style.scss';

const ChangeBox = () => {
  return (
    <div className='change-box'>
      <ChangeBoxName />
      <ChangeBoxList />
    </div>
  );
};

export default ChangeBox;
