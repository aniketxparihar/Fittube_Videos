import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import VideoCard from "../../Components/VideoCard/VideoCard";
import { useUserData } from "../../Context/UserData-Context";


const PlaylistVideos = () => {
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [playlistData, setPlaylistData] = useState({});
  const {
    playlistRender,
  } = useUserData();


  const playlistUrl = `${window.location.pathname}`.slice(10);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/user/playlists/${playlistUrl}`, {
        headers: {
          authorization: JSON.parse(localStorage.getItem("user")).encodedToken,
        },
      });
      setPlaylistVideos(response.data.playlist.videos);
      setPlaylistData(response.data.playlist);
    })();
  }, [playlistRender]);
  const navigate = useNavigate();
  return (
    <div className="playlist__container">
      <div className="page__heading">Playlist</div>
      <div className="page__sub__heading txt-gray-400">
        {playlistData.title}
      </div>
      <div className="playlist__card__wrapper">

        {playlistVideos.length>0?
          playlistVideos.map((video) => {
          return (
            <VideoCard
              key={video._id}
              video={video}
              title={video.title}
              creator={video.creator}
              _id={video._id}
              playlist={true}
              playlistId={playlistData._id}
            />
          );
        }):navigate("/playlist")}
      </div>
    </div>
  );
};

export default PlaylistVideos;
