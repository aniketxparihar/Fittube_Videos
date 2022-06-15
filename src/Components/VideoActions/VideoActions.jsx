import React, { useEffect, useState } from "react";
import "./VideoActions.css";
import { useAuth } from "../../Context/Auth-Context";
import { useUserData } from "../../Context/UserData-Context";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios";
const VideoActions = (props) => {
  const {
    currentIdHandler,
    modalVisibleHandler,
    currentVideoHandler,
    sortByHandler,
  } = useUserData();
  const { authToken } = useAuth();
  const [likedVideos, setLikedVideos] = useState([]);
  const [likedRender, setLikedRender] = useState(false);
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);
  const [linkText, setLinkText] = useState("Copy Link");
  // Get Liked Videos from the backend
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/user/likes", {
        headers: {
          authorization: authToken,
        },
      });
      setLikedVideos(response.data.likes);
    })();
  }, [likedRender]);

  // Get Watch Later Videos from the backend
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

  //Add to Watch Later Videos
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

  //Remove from Watch Later videos
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

  const isLiked = (video) => {
    return likedVideos.some((likedVideo) => likedVideo._id === video._id);
  };

  const likeHandler = async () => {
    const response = await axios.post(
      "/api/user/likes",
      {
        video: props.video,
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    setLikedRender(!likedRender);
    toast.success("Liked!");
  };

  const dislikeHandler = async () => {
    const response = await axios.delete(`/api/user/likes/${props.video._id}`, {
      headers: {
        authorization: authToken,
      },
    });
    setLikedRender(!likedRender);
    toast.success("Unliked!");
  };

  const copyToClipboard = (id) => {
    navigator.clipboard.writeText(`http://localhost:3000/${id}`);
  };

  return (
    <div className="video__actions__wrapper">
      <div
        className="action like"
        onClick={() =>
          isLiked(props.video) ? dislikeHandler() : likeHandler()
        }
      >
        <i className="material-icons">thumb_up</i>{" "}
        {isLiked(props.video) ? "Liked" : "like"}
      </div>
      <div
        className="action watchlater"
        onClick={() => {
          if (watchLaterVideos.some((video) => video._id === props.video._id)) {
            removeFromWatchLaterHandler();
            toast.success("Removed from Watch Later!");
          } else {
            watchLaterHandler();
            toast.success("Added to Watch Later!");
          }
        }}
      >
        <i className="material-icons">watch_later</i>
        {watchLaterVideos?.some((video) => video._id === props.video._id) ===
        true
          ? "Remove From Watch Later"
          : "Add to Watch Later"}
      </div>
      <div
        className="action save"
        onClick={() => {
          currentVideoHandler(props.video);
          modalVisibleHandler("flex");
          currentIdHandler(props.video._id);
        }}
      >
        <i className="material-icons">playlist_add</i> Save
      </div>
      <div
        className="action copylink"
        onClick={() => {
          setLinkText("Copied!");
          setTimeout(() => setLinkText("Copy Link"), 4000);
          copyToClipboard(props.video._id);
          toast.success("Copied!");
        }}
      >
        <i className="material-icons">content_copy</i> {linkText}
      </div>
    </div>
  );
};

export default VideoActions;
