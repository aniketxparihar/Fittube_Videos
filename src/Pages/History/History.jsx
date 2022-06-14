import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import VideoCard from "../../Components/VideoCard/VideoCard";
import { useAuth } from "../../Context/Auth-Context";
import { useUserData } from "../../Context/UserData-Context";
import "./History.css";

import { getHistory,deleteAllFromHistory } from "../../services/historyService";

const History = () => {
  const { authToken } = useAuth();
  const { historyVideos, setHistoryVideos } = useUserData();

  //Get All History Videos on Initial Render
  useEffect(() => {
    (async () => {
      const res = await getHistory(authToken);
      setHistoryVideos(res.data.history);
    })();
  }, []);
  
  
  return (
    <div className="history__container">
      <div className="page__heading">
        History
        <div
          className="clear-history"
          onClick={async () => {
            const res = await deleteAllFromHistory(authToken);
            setHistoryVideos(res.data.history);
            toast.success("History Cleared")
          }}
        >
          Clear History
        </div>
      </div>
      <div className="page__sub__heading txt-gray-400">
        {historyVideos?.length} videos
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
