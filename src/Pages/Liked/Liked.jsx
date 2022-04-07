import React, { useEffect, useState } from "react";
import VideoCard from "../../Components/VideoCard/VideoCard";
import { useAuth } from "../../Context/Auth-Context";
import axios from "axios";
import "./Liked.css";

const Liked = () => {
  const { authToken } = useAuth();
  const [likedVideos, setLikedVideos] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/user/likes", {
        headers: {
          authorization: authToken,
        },
      });
      setLikedVideos(response.data.likes);
    })();
  }, []);

  return (
    <div className="liked__container">
      <div className="page__heading">Liked</div>
      <div className="page__sub__heading txt-gray-400">
        {likedVideos.length} videos
      </div>
      <div className="video__card__wrapper">
        {likedVideos.map((video) => {
          return (
            <div key={video.id} className="video__card">
              <VideoCard
                video={video}
                title={video.title}
                creator={video.creator}
                _id={video._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Liked;
