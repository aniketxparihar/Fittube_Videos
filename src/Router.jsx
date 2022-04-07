import React from "react";
import { Routes as RoutesContainer, Route } from "react-router-dom";
import App from "./App";

import Mockman from "mockman-js";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthRoute from "./Components/AuthRoute/AuthRoute";
import VideoListing from "./Pages/VideoListing/VideoListing";
import Playlist from "./Pages/Playlist/Playlist";
import History from "./Pages/History/History";
import WatchLater from "./Pages/WatchLater/WatchLater";
import Liked from "./Pages/Liked/Liked";
import Signup from "./Pages/Auth/Signup/Signup";
import Login from "./Pages/Auth/Login/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword";
import SingleVideo from "./Pages/SingleVideo/SingleVideo";
import PlaylistVideos from "./Pages/PlaylistVideos/PlaylistVideos";
import Home from "./Pages/Home/Home";
import UserProfile from "./Pages/UserProfile/UserProfile";
const Routes = () => {
  return (
    <RoutesContainer>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/videos" index element={<VideoListing />} />
        <Route element={<PrivateRoute />}>
          <Route path="/:id" element={<SingleVideo />} />
          <Route path="/playlist/:id" element={<PlaylistVideos />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/history" element={<History />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Route>
      </Route>
      <Route path="/Mockman" element={<Mockman />} /> */}
    </RoutesContainer>
  );
};
export default Routes;
