import React from 'react';
import SongCategoryItem from '../SongCategoryItem';
import './style.scss';

const SongCategoryList = () => {
  return (
    <div className='song-category-item'>
      <SongCategoryItem />
      <SongCategoryItem />
      <SongCategoryItem />
    </div>
  );
};

export default SongCategoryList;
