import React, { useState, useEffect } from "react";
import { useUserData } from "../../Context/UserData-Context";
import "./VideoCard.css";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const VideoCard = (props) => {
  const [showOptions, setShowOptions] = useState("none");
  const { currentIdHandler, modalVisibleHandler, currentVideoHandler,watchLaterRender,setWatchLaterRender ,playlistRender,setPlaylistRender} =

    useUserData();
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/user/watchLater", {
        headers: {
          authorization: JSON.parse(localStorage.getItem("user")).encodedToken,
        },
      });
      setWatchLaterVideos(response.data.watchLater);
    })();
  }, []);

  const getWatchLaterVideos = async () => {
    const response = await axios.get("/api/user/watchLater", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("user")).encodedToken,
      },
    });
    setWatchLaterVideos(response.data.watchLater);
  };
  const watchLaterHandler = async () => {
    const response = await axios.post(
      "/api/user/watchLater",
      {
        video: props.video,
      },
      {
        headers: {
          authorization: JSON.parse(localStorage.getItem("user")).encodedToken,
        },
      }
    );
    getWatchLaterVideos();
  };
  const removeFromWatchLaterHandler = async () => {
    const response = await axios.delete(
      `/api/user/watchLater/${props.video._id}`,
      {
        headers: {
          authorization: JSON.parse(localStorage.getItem("user")).encodedToken,
        },
      }
    );
    getWatchLaterVideos();
  };
  const removeFromPlaylistHandler=async () => {
    const response = await axios.delete(
      `/api/user/playlists/${props.playlistId}/${props.video._id}`,

      {
        headers: {
          authorization: JSON.parse(localStorage.getItem("user")).encodedToken,
        },
      }
    );
    setPlaylistRender(!playlistRender);

  }
  return (
    <div className="card__wrapper box-shadow flex flex-col m-8 bg--main-white relative">
      <div className="card__header flex flex-col ">
        <Link to={`/${props._id}`}>
          <img
            className="card__image pointer"
            src={`https://img.youtube.com/vi/${props._id}/maxresdefault.jpg`}
            alt=""
          />
        </Link>

        <div className="width-full flex flex-row relative">
          <div className="card__headings p-4">
            <div className="card__heading txt-2xl txt-bold txt-gray-200">
              {props.title}
            </div>
            <div className="card__sub__heading txt-2xl bold txt-gray-400 p-4">
              {props.creator}
            </div>
          </div>
          <i
            className="more material-icons pointer"
            onMouseLeave={() => {
              setShowOptions("none");
            }}
            onMouseEnter={() => {
              setShowOptions("flex");
            }}
          >
            more_vert
          </i>
        </div>
      </div>
      <div
        className="more__options"
        onMouseLeave={() => {
          setShowOptions("none");
        }}
        onMouseEnter={() => {
          setShowOptions("flex");
        }}
        style={{ display: showOptions }}
      >
        <div
          className="more__option"
          onClick={() => {
            if (
              watchLaterVideos.some((video) => video._id === props.video._id)
            ) {
              removeFromWatchLaterHandler();
              toast.error("Removed from Watch Later!");
              
            } else {
              watchLaterHandler();
              toast.success("Added to Watch Later!");

            }
            setWatchLaterRender(!watchLaterRender);
          }}
        >
          <i className="more__option__icon material-icons pointer">
            watch_later
          </i>
          {watchLaterVideos.some((video) => video._id === props.video._id) ===
          true
            ? "Remove From Watch Later"
            : "Add to Watch Later"}
        </div>
        <div
          className="more__option"
          onClick={() => {
            currentVideoHandler(props.video);
            modalVisibleHandler("flex");
            currentIdHandler(props._id);
          }}
        >
          <i className="more__option__icon  material-icons pointer">
            playlist_add
          </i>
          Add to Playlist
        </div>
        <div
          className="more__option"
          style={{display:props.playlist?"block":"none"}}
          onClick={() => {
            currentVideoHandler(props.video);
            currentIdHandler(props._id);
            removeFromPlaylistHandler(props._id);
            toast.error("Video removed");
          }}
        >
          <i className="more__option__icon  material-icons pointer">
            delete
          </i>
          remove from Playlist

        </div>
      </div>
    </div>
  );
};

export default VideoCard;
