import React from 'react';
import VideoHotItem from '../VideoHotItem';
import './style.scss';

const listItem = [
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg',
    song: 'Walk On Da Street',
    singer: '16 Typh, 16 BRT',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg',
    song: 'Walk On Da Street',
    singer: '16 Typh, 16 BRT',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg',
    song: 'Walk On Da Street',
    singer: '16 Typh, 16 BRT',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg',
    song: 'Walk On Da Street',
    singer: '16 Typh, 16 BRT',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg',
    song: 'Walk On Da Street',
    singer: '16 Typh, 16 BRT',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg',
    song: 'Walk On Da Street',
    singer: '16 Typh, 16 BRT',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg',
    song: 'Walk On Da Street',
    singer: '16 Typh, 16 BRT',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg',
    song: 'Walk On Da Street',
    singer: '16 Typh, 16 BRT',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg',
    song: 'Walk On Da Street',
    singer: '16 Typh, 16 BRT',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg',
    song: 'Walk On Da Street',
    singer: '16 Typh, 16 BRT',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg',
    song: 'Walk On Da Street',
    singer: '16 Typh, 16 BRT',
  },
  {
    id: Math.random(),
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/0/b/b/f0bb30def4c6784dc78039111c047340.jpg',
    song: 'Walk On Da Street',
    singer: '16 Typh, 16 BRT',
  },
];

const renderItem = listItem.map((item) => <VideoHotItem item={item} />);

const VideoHotList = () => {
  return <div className='video-hot-list'>{renderItem}</div>;
};

export default VideoHotList;
