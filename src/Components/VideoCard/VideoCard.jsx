import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import "./VideoCard.css";
import { deleteFromHistory } from "../../services/historyService";
import { useAuth } from "../../Context/Auth-Context";
import { addToWatchLater, deleteFromWatchLater, getWatchLater } from "../../services/watchLaterService";
import { deleteFromPlaylist } from "../../services/playlistService";
import { useUserData } from "../../Context/UserData-Context";


const VideoCard = (props) => {
  const navigate = useNavigate();
  const { authToken } = useAuth();
  const [showOptions, setShowOptions] = useState("none");
  const {
    currentIdHandler,
    modalVisibleHandler,
    currentVideoHandler,
    watchLaterRender,
    setWatchLaterRender,
    playlistRender,
    setPlaylistRender,
  } = useUserData();
  const { setHistoryVideos } = useUserData();
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getWatchLater(authToken);
      setWatchLaterVideos(res.data.watchLater);
    })();
  }, [watchLaterRender]);


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
          onClick={async () => {
            if(authToken){
            if (
              watchLaterVideos?.some((video) => video._id === props.video._id)
            ) {
              const res=await deleteFromWatchLater(authToken,props.video);
              setWatchLaterVideos(res.data.watchLater);
              toast.success("Removed from Watch Later!");
            } else {
              const res=await addToWatchLater(authToken, props.video);
              setWatchLaterVideos(res.data.watchLater);
              toast.success("Added to Watch Later!");
            }
              setWatchLaterRender(!watchLaterRender);
            }
            else {
              toast.success("Please Login First")
              setTimeout(navigate("/Login"),2000)
            }
          }}
        >
          <i className="more__option__icon material-icons pointer">
            watch_later
          </i>
          {watchLaterVideos?.some((video) => video._id === props.video._id) ===
          true
            ? "Remove From Watch Later"
            : "Add to Watch Later"}
        </div>
        <div
          className="more__option"
          onClick={() => {
            if(authToken){ currentVideoHandler(props.video);
            modalVisibleHandler("flex");
            currentIdHandler(props._id);}
            else {
              toast.success("Please Login First")
              setTimeout(navigate("/Login"),2000)
            }
          }}
        >
          <i className="more__option__icon  material-icons pointer">
            playlist_add
          </i>
          Add to Playlist
        </div>

        <div
          className="more__option"
          style={{ display: props.playlist ? "block" : "none" }}
          onClick={async () => {
            currentVideoHandler(props.video);
            currentIdHandler(props._id);
            deleteFromPlaylist(authToken,{_id:props.playlistId}, props.video);
            setPlaylistRender(!playlistRender)
            toast.error("Video removed");
          }}
        >
          <i className="more__option__icon  material-icons pointer">delete</i>
          remove from Playlist
        </div>

        {/* render delete from history button in case the card is being rendered inside the history page */}
        {props.history ? (
          <div
            className="more__option"
            onClick={async () => {
              const res = await deleteFromHistory(authToken, props.video);
              await setHistoryVideos(res.data.history);
              toast.success("Video removed from History");
            }}
          >
            <i className="more__option__icon material-icons pointer">delete</i>
            Remove from history
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default VideoCard;
