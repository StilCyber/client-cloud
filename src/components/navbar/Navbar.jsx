import React from "react";
import "./navbar.css";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <div className="navbar__img">
            <a href="#"> 
              <img src={logo} alt="#" />
            </a>
          </div>
          <div className="navbar__title">MERN CLOUD</div>
        </div>
        <div className="navbar__auth">
          <div className="navbar__login"><NavLink to='/login'>Sing in</NavLink></div>
          <div className="navbar__registration"><NavLink to="/registration">Sing up</NavLink></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
