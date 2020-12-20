import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../App";

import "./NavBarSection.css";

const NavBarSection = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleLogOut = () => {
    window.location.reload("Refresh");
  };
  return (
    <div>
      <div className="navContainer">
        <div className="container ">
          <nav class="navbar navbar-expand-lg ">
            <Link to="/">
              <h3>Move Theatar</h3>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src="https://img.icons8.com/doodle/48/000000/menu.png" />
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item pl-3 pr-3">
                  <NavLink exact className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>

                <li class="nav-item pl-3 pr-3">
                  <NavLink exact className="nav-link" to="/about">
                    About Us
                  </NavLink>
                </li>

                <li class="nav-item pl-3 pr-3">
                  <NavLink exact className="nav-link" to="/allMovie">
                    All Movie
                  </NavLink>
                </li>

                <li class="nav-item pl-3 pr-3">
                  <NavLink exact className="nav-link h5" to="/myProfile">
                    {loggedInUser.name} - My Profile
                  </NavLink>
                </li>

                {loggedInUser.email ? (
                  <li class="nav-item pl-3 pr-3">
                    <div onClick={handleLogOut} className="nav-link h5" to="/">
                      Log Out
                    </div>
                  </li>
                ) : (
                  <li class="nav-item pl-3 pr-3">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBarSection;
