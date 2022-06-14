import React, { useEffect } from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/Auth-Context";
const UserProfile = () => {
  const { foundUser, userHandler } = useAuth();
  const logout = () => {
    localStorage.removeItem("user");
    userHandler(null);
  };
  useEffect(() => {}, [foundUser]);
  return (
    <div className="profile__container">
      <div className="profile">
        <div className="flex flex-col bg-main-black">
          <div className="list__head  txt-main-white p-4">User</div>
          <div className="list__stacked">
            <div className="list__item  txt-main-white p-4 ">
              Name: {foundUser.firstName} {foundUser.lastName}
            </div>
            <div className="list__item  txt-main-white p-4 ">
              Email : {foundUser.email}
            </div>
           
          </div>
        </div>
        <div className="logout" onClick={logout}>
          <button className="logout button m-8 p-4 txt-2xl txt-bold bg--primary rounded-m">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
