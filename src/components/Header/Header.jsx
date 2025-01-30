import React from "react";
import HeaderIcon from "../../assets/HeaderIcon.png";
import Search from "../../assets/Seach.svg";
import Shop from "../../assets/Shop.svg";
import Logout from "../../assets/Logout.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header_inner">
          <div className="header_image">
            <img src={HeaderIcon} alt="" />
          </div>
          <ul className="header_list">
            <li className="header_item">
              <NavLink to={'/'} className="header_item">Home</NavLink>
            </li>
            <li className="header_item">
              <NavLink to={'/shop'} className="header_item">Shop</NavLink>
            </li>
            <li className="header_item">
              <NavLink to={'plant'} className="header_item">Planet Care</NavLink>
            </li>
            <li className="header_item">
              <NavLink  to={'blog'}className="header_item">Blogs</NavLink>
            </li>
          </ul>
          <div className="search">
            <img src={Search} alt="" />
            <img src={Shop} alt="" />
            <button
              className="
                header_btn"
            >
              <img src={Logout} alt="" />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
