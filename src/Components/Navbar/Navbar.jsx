import React, { useState } from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import { useUserData } from '../../Context/UserData-Context';

const Navbar = () => {
  const { searchString, setSearchString } = useUserData();
  return (
    <div>
      <nav>
        <Link to="/" className="logo txt-gray-200">
          Fittube
        </Link>
        <div className="search__container">
          <input
            type="text"
            className="search__input"
            placeholder="  Search Here "
            onChange={(e)=>setSearchString(e.target.value)}
          />
          <i className="search__icon badge__icon material-icons relative p-4  rounded-s txt-gray-400 pointer">
            search
          </i>
        </div>
        <div className="links">
          <Link
            to="/Profile"
            className="link pointer cart__page"
            id="cart__page"
          >
            <i className=" material-icons settings relative ">account_circle</i>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar