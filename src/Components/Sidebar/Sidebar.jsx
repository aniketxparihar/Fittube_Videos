import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useUserData } from "../../Context/UserData-Context";
const Sidebar = () => {
  const { sortByHandler } = useUserData();
  return (
    <div className="sidebar ">
      <Link className="sidebar__links" to="/videos" onCLick={sortByHandler("All")}>
        <i className="material-icons">home</i>
        Videos
      </Link>
      <Link className="sidebar__links" to="playlist">
        <i className="material-icons">queue</i>
        Playlist
      </Link>
      <Link className="sidebar__links" to="liked">
        <i className="material-icons">thumb_up</i>
        Liked
      </Link>
      <Link className="sidebar__links" to="watchlater">
        <i className="material-icons">watch_later</i>
        Watch Later
      </Link>
      <Link className="sidebar__links" to="history">
        <i className="material-icons">history</i>
        History
      </Link>
    </div>
  );
};

export default Sidebar;
