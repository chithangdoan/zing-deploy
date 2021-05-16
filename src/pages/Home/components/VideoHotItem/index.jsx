import React from 'react';
import VideoHotPhoto from '../VideoHotPhoto';
import VideoHotSong from '../VideoHotSong';
import VideoHotSinger from '../VideoHotSinger';

const VideoHotItem = ({ item }) => {
  return (
    <div>
      <VideoHotPhoto img={item.img} />
      <VideoHotSong song={item.song} />
      <VideoHotSinger singer={item.singer} />
    </div>
  );
};

export default VideoHotItem;
