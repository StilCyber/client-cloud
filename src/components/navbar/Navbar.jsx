import React from "react";
import "./navbar.css";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";

function Navbar() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <div className="navbar__img">
          <NavLink to='/'><img src={logo} alt="#" /></NavLink>


          </div>
          <div className="navbar__title">MERN CLOUD</div>
        </div>
        <div className="navbar__auth">
          {!isAuth && <div className="navbar__login"><NavLink to='/login'>Sing in</NavLink></div>}
          {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Sing up</NavLink></div>}
          {isAuth && <button className="navbar__logout" onClick={() => dispatch(logout())}>LogOut</button>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
