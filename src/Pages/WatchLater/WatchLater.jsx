import React, { useState, useEffect } from "react";
import VideoCard from "../../Components/VideoCard/VideoCard";
import { useAuth } from "../../Context/Auth-Context";
import axios from "axios";
import "./WatchLater.css";
import { useUserData } from "../../Context/UserData-Context";

const WatchLater = () => {
  const { authToken } = useAuth();
  const { watchLaterRender } = useUserData();
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/user/watchLater", {
        headers: {
          authorization: authToken,
        },
      });
      setVideoList(response.data.watchLater);
    })();
  }, [watchLaterRender]);

  return (
    <div className="watchlater__container">
      <div className="page__heading txt-main-white">Watch Later</div>
      <div className="page__sub__heading txt-gray-400">
        {videoList?.length} Videos
      </div>
      <div className="video__card__wrapper">
        {videoList?.map((video) => {
          return (
            <div key={video?.id} className="?__card">
              <VideoCard
                video={video}
                title={video?.title}
                creator={video?.creator}
                _id={video?._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchLater;
