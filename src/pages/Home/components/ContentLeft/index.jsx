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

const ContentLeft = () => (
  <>
    <TopSong />
    <RankList />
    <ChangeBox />
    <VideoHot />
    <AlbumHot />
    <VietSong />
    <HotArtist />
  </>
);

export default ContentLeft;
