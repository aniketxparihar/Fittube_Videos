import React, { useEffect, useState } from "react";
import PlaylistCard from "../../Components/PlaylistCard/PlaylistCard";
import "./Playlist.css";
import axios from "axios";
const Playlist = () => {
  const [playlistData, setPlaylistData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/user/playlists", {
        headers: {
          authorization: JSON.parse(localStorage.getItem("user")).encodedToken,
        },
      });
      setPlaylistData(response.data.playlists);
    })();
  }, []);
  return (
    <div className="playlist__container">
      <div className="page__heading">Playlists</div>
      <div className="page__sub__heading txt-gray-400">
        {playlistData?.length} Playlists
      </div>
      <div className="playlist__card__wrapper">
        {playlistData?.map((playlist) => {
          if(playlist){
          return (
            <div key={playlist._id} className="video__card">
              <PlaylistCard playlist={playlist} />
            </div>
            );
          }
          else {
            return;
          }
        })}
      </div>
    </div>
  );
};

export default Playlist;
