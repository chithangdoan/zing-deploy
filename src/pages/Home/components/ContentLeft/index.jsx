// libs
import React from "react";
// components
import AlbumHot from "../AlbumHot";
import ChangeBox from "../ChangeBox";
import HotArtist from "../HotArtist";
import RankList from "../RankList";
import TopSong from "../TopSong";
import VideoHot from "../VideoHot";
import VietSong from "../VietSong";

const ContentLeft = ({ handleChosenDiv }) => (
  <div className="content-left">
    <TopSong />
    <RankList />
    <ChangeBox />
    <VideoHot handleChosenDiv={handleChosenDiv} />
    <AlbumHot handleChosenDiv={handleChosenDiv} />
    <VietSong />
    <HotArtist />
  </div>
);

export default ContentLeft;
