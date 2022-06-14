import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";


import { useUserData } from "../../Context/UserData-Context";
import { useAuth } from "../../Context/Auth-Context";
import "./Playlist_Modal.css";

import {
  addToPlaylist,
  deletePlaylist,
  createNewPlaylist,
  getPlaylists,
  deleteFromPlaylist,
} from "../../services/playlistService";


const Playlist_Modal = (props) => {
  const { authToken } = useAuth();
  const { modalVisible, modalVisibleHandler, currentVideo } = useUserData();
  const [isChecked, setIsChecked] = useState(false);
  const [currentPlaylist,setCurrentPlaylist]=useState()
  const [playlistName, setPlaylistName] = useState("");
  const [playlistData, setPlaylistData] = useState([]);
  const [renderHandler, setRenderHandler] = useState(true);

  useEffect(() => {
    (async () => {
      const res= await getPlaylists(authToken);
      setPlaylistData(res.data.playlists);
    })();
  }, [renderHandler]);

  
  return (
    <div className="modal__container" style={{ display: modalVisible }}>
      <div className="playlist__modal">
        <div className="playlist__heading__container">
          <div className="txt-4xl  txt-main-white">Save to...</div>
          <i
            className="playlist__modal__cancel material-icons"
            onClick={(props) => {
              modalVisibleHandler("none");
              setIsChecked("");
            }}
          >
            close
          </i>
        </div>
        {playlistData?.map((playlist) => {
          return (
            <div className="playlist__select__container" key={playlist._id}>
              <input
                type="checkbox"
                id={`${playlist._id}`}
                className="playlist__select"
                checked={playlist.videos.some(
                      (video) => video._id === currentVideo._id
                    )}
                onClick={async (e) => {
                  if(playlist.videos.some(
                      (video) => video._id === currentVideo._id
                  )) {
                     await deleteFromPlaylist(
                       authToken,
                       playlist,
                       currentVideo
                     );
                     modalVisibleHandler("none");
                     setRenderHandler(!renderHandler);
                     toast.success(`Video removed from ${playlist.title}`);
                  }
                  else {
                   await addToPlaylist(authToken, playlist, currentVideo);
                   modalVisibleHandler("none");
                   setRenderHandler(!renderHandler);
                   toast.success(`Video added to ${playlist.title}`);
                  }
                }}
              />
              <label htmlFor={`${playlist._id}`} className="txt-main-white">
                {playlist.title}
              </label>
              <i
                className="playlist__delete material-icons"
                onClick={async () => {
                  await deletePlaylist(authToken, playlist);
                  setRenderHandler(!renderHandler);
                  modalVisibleHandler("none");
                  toast.success(`${playlist.title} Deleted`);
                }}
              >
                delete
              </i>
            </div>
          );
        })}
        <div className="playlist__input__container">
          <input
            type="text"
            className="playlist__input"
            value={playlistName}
            onChange={(e) => {
              setPlaylistName(e.target.value);
            }}
          />
          <button
            className="create button m-8 p-4 txt-2xl txt-bold bg--primary rounded-m"
            onClick={ () => {
              createNewPlaylist(authToken,{ title: playlistName,description:"" });
              setPlaylistName("");
              setRenderHandler(!renderHandler);
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playlist_Modal;
