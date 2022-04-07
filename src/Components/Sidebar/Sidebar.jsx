import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar ">
      <Link className="sidebar__links" to="/videos">
        <i className="material-icons">home</i>
        <div className="sidebar__text">Videos</div>
      </Link>
      <Link className="sidebar__links" to="playlist">
        <i className="material-icons">queue</i>
        <div className="sidebar__text"> Playlist</div>
      </Link>
      <Link className="sidebar__links" to="liked">
        <i className="material-icons">thumb_up</i>
        <div className="sidebar__text"> Liked</div>
      </Link>
      <Link className="sidebar__links" to="watchlater">
        <i className="material-icons">watch_later</i>
        <div className="sidebar__text"> Watch Later</div>
      </Link>
      <Link className="sidebar__links" to="history">
        <i className="material-icons">history</i>
        <div className="sidebar__text"> History</div>
      </Link>
    </div>
  );
};

export default Sidebar;
