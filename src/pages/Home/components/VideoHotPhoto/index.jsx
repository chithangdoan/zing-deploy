import React from 'react';
import './style.scss';

const VideoHotPhoto = ({ img }) => {
  return (
    <div className='video-hot-photo'>
      <img alt='video-hot' src={img} />
    </div>
  );
};

export default VideoHotPhoto;
