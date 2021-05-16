import React from 'react';
import VideoHotIcon from '../VideoHotIcon';
import VideoHotName from '../VideoHotName';
import './style.scss';

const VideoHotLink = () => {
  return (
    <div className='video-hot-link'>
      <VideoHotName />
      <VideoHotIcon />
    </div>
  );
};

export default VideoHotLink;
