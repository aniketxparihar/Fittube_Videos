import React from "react";
import { Link } from "react-router-dom";
import "./PlaylistCard.css";

const PlaylistCard = (props) => {
  
    return (
      <div>
        <div>
          <div className="card__wrapper box-shadow flex flex-col m-8 bg--main-white ">
            <div className="card__header flex flex-col relative">
              <Link to={`/playlist/${props.playlist._id}`}>
                <img
                  className="card__image pointer"
                  src={`https://img.youtube.com/vi/${props.playlist.videos[0]?._id}/maxresdefault.jpg`}
                  alt=""
                />
              </Link>
              <div className="image__overlay">
                {props.playlist.videos.length}
                <i className="material-icons playlist__icon">playlist_play</i>
              </div>
              <div className="card__headings p-4">
                <div className="card__heading txt-2xl txt-bold txt-gray-200">
                  {props.playlist.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
};

export default PlaylistCard;
