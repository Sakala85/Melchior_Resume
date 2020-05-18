import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import Avatar from "../img/avatar.jpeg";

const SideBar = (props) => {
  return (
    <nav className="container">
      <img className="avatar" src={Avatar} alt="Melchior" />
      <NavLink to="/Profile" className="link">
        Profile
      </NavLink>
      <NavLink to="/Formation" className="link">
        Formation
      </NavLink>
      <NavLink to="/Experience" className="link">
        Experience
      </NavLink>
      <NavLink to="/Project" className="link">
        Project
      </NavLink>
      <NavLink to="/Jobs" className="link">
        Jobs
      </NavLink>
    </nav>
  );
};

export default SideBar;
