import React, { useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_NAME_1, COMPANY_NAME_2 } from "../../assets/utils";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const [state, setState] = useState(false);
  const { user } = useAuthContext();
  const role = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user")).role
    : "open";
  const handleClick = () => {
    setState(!state);
  };

  return (
    <div className="navbar-parent">
      <div className="nav-left">
        <Link to={"/"} className="logo-link">
          {/* Logo */}
          <div className="logo-img">
            <i className="fa-solid fa-star-of-life"></i>
          </div>
          <div className="logo-name">
            {COMPANY_NAME_1}
            <p>{COMPANY_NAME_2}</p>
          </div>
        </Link>
      </div>
      {/*  */}
      <div className={state ? "nav-center active" : "nav-center"}>
        {/* Navlinks */}
        <div className="navlink" onClick={handleClick}>
          <Link className="navlink-link" to={"/"}>
            Home
          </Link>
        </div>
        <div className="navlink" onClick={handleClick}>
          <Link className="navlink-link" to={"/blog"}>
            Blogs
          </Link>
        </div>
        <div className="navlink" onClick={handleClick}>
          <Link className="navlink-link" to={"/doctors"}>
            Doctors
          </Link>
        </div>
        {role !== "doctor" && (
          <>
            <div className="navlink" onClick={handleClick}>
              <Link className="navlink-link" to={"/services"}>
                Services
              </Link>
            </div>
          </>
        )}
        {user && (
          <div className="navlink" onClick={handleClick}>
            <Link className="navlink-link" to={"/dashboard"}>
              Dashboard
            </Link>
          </div>
        )}
        <div className="navlink" onClick={handleClick}>
          <Link className="navlink-link" to={"/about"}>
            About
          </Link>
        </div>
        <div className="navlink" onClick={handleClick}>
          <Link className="navlink-link" to={"/contact"}>
            Contact
          </Link>
        </div>
      </div>

      <div className="nav-right">
        {/* Login Btn */}
        {user && (
          <div>
            <Link className="user-icon" to={`/profile`}>
              <i className="fa-solid fa-user-injured"></i>
            </Link>
          </div>
        )}
        {!user && (
          <div className="login-btn">
            <Link className="navbar-login-link" to={"/login"}>
              Login
            </Link>
          </div>
        )}
        <div className="hamburger-icon" onClick={handleClick}>
          <i className={state ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
