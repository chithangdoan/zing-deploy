import React from 'react';
import VietSongItem from '../VietSongItem';
import './style.scss';
const listItem = [
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/c/b/4/d/cb4da5c33ee15a4f41d06793b16f4b55.jpg',
    song: 'Vẫn Luôn Chờ Em',
    singer: 'Tường Duy,TRUNKY',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/c/b/4/d/cb4da5c33ee15a4f41d06793b16f4b55.jpg',
    song: 'Vẫn Luôn Chờ Em',
    singer: 'Tường Duy,TRUNKY',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/c/b/4/d/cb4da5c33ee15a4f41d06793b16f4b55.jpg',
    song: 'Vẫn Luôn Chờ Em',
    singer: 'Tường Duy,TRUNKY',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/c/b/4/d/cb4da5c33ee15a4f41d06793b16f4b55.jpg',
    song: 'Vẫn Luôn Chờ Em',
    singer: 'Tường Duy,TRUNKY',
  },
];

const renderList =
const VietSongNewList = () => {
  return (
    <div className='viet-song-new-list'>
      <VietSongItem />
    </div>
  );
};

export default VietSongNewList;
