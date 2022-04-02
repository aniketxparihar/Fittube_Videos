import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../../Components/VideoCard/VideoCard";
import Categories from "../../Components/Category/Category";
import "./VideoListing.css";
import { useUserData } from "../../Context/UserData-Context";
import Playlist_Modal from "../../Components/Playlist_Modal/Playlist_Modal";
const VideoListing = () => {
  const [videoList, setVideoList] = useState([]);
  const { category, sortBy, sortByHandler } = useUserData();
  useEffect(
    () =>{
      (async () => {
        const response = await axios.get("/api/videos");
        setVideoList(response.data.videos);
        sortByHandler(category);
      })()},
    []
  );
  const [sortedVideos, setSortedVideos] = useState(videoList);
  useEffect(
    () =>
      setSortedVideos(videoList.filter((video) => video.category === sortBy)),
    [sortBy]
  );
  return (
    <div className="video__listing__container">
      <Categories />

      <div className="videos__list__container">
        {sortBy !== "All" && sortBy !== ""
          ? sortedVideos.map((video) => {
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
            })
          : videoList.map((video) => {
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

export default VideoListing;