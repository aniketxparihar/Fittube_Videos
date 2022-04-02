import React, { useState, useEffect } from "react";
import VideoCard from "../../Components/VideoCard/VideoCard";
import { useAuth } from "../../Context/Auth-Context";
import axios from "axios";
import "./History.css";
import { useUserData } from "../../Context/UserData-Context";

const History = () => {
  const { authToken } = useAuth();
  const [historyVideos, setHistoryVideos] = useState([]);
  const { historyRender} = useUserData();
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/user/history", {
        headers: {
          authorization: authToken,
        },
      });
      setHistoryVideos(response.data.history);
    })();
  }, [historyRender]);
  
  const clearAllHistory = async () => {
    const response = await axios.delete("/api/user/history/all", {
      headers: {
        authorization: authToken,
      },
    });
    setHistoryVideos(response.data.history);
  };
  return (
    <div className="history__container">
      <div className="page__heading">
        History
        <i className="material-icons pointer" onClick={clearAllHistory}>
          delete
        </i>
      </div>
      <div className="page__sub__heading txt-gray-400">
        {historyVideos.length} videos
      </div>
      <div className="video__card__wrapper">
        {historyVideos?.map((video) => {
          return (
            <div key={video.id} className="video__card">
              <VideoCard
                video={video}
                title={video.title}
                creator={video.creator}
                _id={video._id}
                history={true}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
