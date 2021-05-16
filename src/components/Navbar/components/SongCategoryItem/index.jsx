import React from 'react';
import ChildMenu from '../ChildMenu';
import SongCategoryLink from '../SongCategoryLink';
import './style.scss';

const SongCategoryItem = ({ item }) => {
  return (
    <div className='song-category-item'>
      <SongCategoryLink name={item.name} />
      <ChildMenu sub={item.sub} />
    </div>
  );
};

export default SongCategoryItem;
