import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";
import { getFiles, searchFiles } from "../../actions/files";
import { showLoader } from "../../reducers/appReducer";
import avatarLogo from "../../assets/img/avatar.svg";
import { API_URL } from "../../config";

function Navbar() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const currentDir = useSelector((state) => state.files.currentDir);
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const avatar = currentUser.avatar
    ? `${API_URL + currentUser.avatar}`
    : avatarLogo;
  console.log(currentUser);

  function searchChangeHandler(e) {
    setSearchName(e.target.value);
    if (searchTimeout != false) {
      clearTimeout(searchTimeout);
    }
    dispatch(showLoader());
    if (e.target.value != "") {
      setSearchTimeout(
        setTimeout(
          (value) => {
            dispatch(searchFiles(value));
          },
          500,
          e.target.value
        )
      );
    } else {
      dispatch(getFiles(currentDir));
    }
  }

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <div className="navbar__img">
            <NavLink to="/">
              <img src={logo} alt="#" />
            </NavLink>
          </div>
          <div className="navbar__title">MERN CLOUD</div>
        </div>
        <div className="navbar__auth">
          {isAuth && (
            <input
              className="navbar__search"
              type="text"
              placeholder="Title file"
              value={searchName}
              onChange={(e) => searchChangeHandler(e)}
            />
          )}

          {!isAuth && (
            <div className="navbar__login">
              <NavLink to="/login">Sing in</NavLink>
            </div>
          )}
          {!isAuth && (
            <div className="navbar__registration">
              <NavLink to="/registration">Sing up</NavLink>
            </div>
          )}
          {isAuth && (
            <button
              className="navbar__logout"
              onClick={() => dispatch(logout())}
            >
              LogOut
            </button>
          )}
          {isAuth && (
            <NavLink to='/profile'>
              <img src={avatar} alt="#" />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
