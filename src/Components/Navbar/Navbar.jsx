import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {


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
          />
          <i className="search__icon badge__icon material-icons relative p-4  rounded-s txt-gray-400 pointer">
            search
          </i>
        </div>
        <div className="links">
          <Link className="link pointer cart__page"to="/settings">
            <i className=" material-icons settings relative ">settings</i>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar