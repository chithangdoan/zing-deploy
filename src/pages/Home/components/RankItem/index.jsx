import React from 'react';
import RankDash from '../RankDash';
import RankImage from '../RankImage';
import RankNumber from '../RankNumber';
import RankTextBox from '../RankTextBox';
import RankToolList from '../RankToolList';
import './style.scss';

const RankItem = () => {
  return (
    <div className='rank-item'>
      <RankNumber />
      <RankDash />
      <RankImage />
      <RankTextBox />
      <RankToolList />
    </div>
  );
};

export default RankItem;
