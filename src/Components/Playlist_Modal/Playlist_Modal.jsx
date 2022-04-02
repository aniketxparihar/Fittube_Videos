import React, { useState, useEffect } from "react";
import { useUserData } from "../../Context/UserData-Context";
import "./Playlist_Modal.css";
import { useAuth } from "../../Context/Auth-Context";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Playlist_Modal = (props) => {
  const { modalVisible, modalVisibleHandler, currentVideo } = useUserData();
  const [isChecked, setIsChecked] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [playlistData, setPlaylistData] = useState([]);
  const [renderHandler, setRenderHandler] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/user/playlists", {
        headers: {
          authorization: JSON.parse(localStorage.getItem("user")).encodedToken,
        },
      });
      setPlaylistData(response.data.playlists);
    })();
  }, [renderHandler]);

  const newPlaylistHandler = async () => {
    const response = await axios.post(
      "/api/user/playlists",
      {
        playlist: { title: playlistName, description: "bar bar bar" },
      },
      {
        headers: {
          authorization: JSON.parse(localStorage.getItem("user")).encodedToken,
        },
      }
    );
    setPlaylistName("");
    setRenderHandler(!renderHandler);
  };

  const deletePlaylistHandler = async (playlistId) => {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: JSON.parse(localStorage.getItem("user")).encodedToken,
      },
    });
    setRenderHandler(!renderHandler);
  };

  const addVideoHandler = async (playlistId) => {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      {
        video: currentVideo,
      },
      {
        headers: {
          authorization: JSON.parse(localStorage.getItem("user")).encodedToken,
        },
      }
    );
  };
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
        {playlistData.map((playlist) => {
          return (
            <div className="playlist__select__container" key={playlist._id}>
              <input
                type="checkbox"
                id={`${playlist._id}`}
                className="playlist__select"
                checked={isChecked === playlist._id}
                onChange={(e) => {
                  setIsChecked(playlist._id);
                  addVideoHandler(playlist._id);
                  modalVisibleHandler("none");
                  setIsChecked("");
                  toast.success(`Video added to ${playlist.title}`);
                }}
              />
              <label htmlFor={`${playlist._id}`} className="txt-main-white">
                {playlist.title}
              </label>
              <i
                className="playlist__delete material-icons"
                onClick={() => deletePlaylistHandler(playlist._id)}
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
            onClick={newPlaylistHandler}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playlist_Modal;
