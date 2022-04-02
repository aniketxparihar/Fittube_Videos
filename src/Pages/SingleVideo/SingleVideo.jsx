import React, { useState, useEffect } from "react";
import VideoActions from "../../Components/VideoActions/VideoActions";
import "./SingleVideo.css";
import { useAuth } from "../../Context/Auth-Context";
import axios from "axios";
const SingleVideo = () => {
  const [videoData, setVideoData] = useState("");
  const { authToken } = useAuth();
  const videoUrl = `${window.location.pathname}`.slice(1);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/video/${videoUrl}`);
      setVideoData(response.data.video);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (videoData !== "") {
        const response = await axios.post(
          "/api/user/history",
          { video: videoData },
          {
            headers: {
              authorization: authToken,
            },
          }
        );
      }
    })();
  }, [videoData]);
  return (
    <div className="video__container">
      <div className="video__wrapper">
        <iframe
          width={560}
          height={315}
          src={`https://www.youtube.com/embed/${window.location.pathname}`}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="video__details">
        <div className="title">{videoData.title}</div>
        <div className="creator">{videoData.creator}</div>
      </div>
      <div className="video__actions ">
        <VideoActions video={videoData} />
      </div>
    </div>
  );
};

export default SingleVideo;
