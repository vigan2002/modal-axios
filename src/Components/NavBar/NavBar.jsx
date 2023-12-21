import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import logo from "../../logo.svg";
import "./navbar.scss";

const NavBar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  const toggleMenu = () => {
    console.log("Fire!", window.innerWidth);
    if (window.innerWidth <= 768) {
      setToggleBtn(!toggleBtn);
      document.body.classList.toggle("scroll-y");
      window.scrollTo(0, 0);
    }
  }

  return (
    <div className="navbar">
        <img src={logo} alt='Logo' />
        <ul
          onClick={() => toggleMenu()}
          className={`${toggleBtn ? "mobile-menu" : ""} menu`}
        >
            <li>
                <NavLink to="/">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/cars">Cars</NavLink>
            </li>
            <li>
                <NavLink to="/user">Users</NavLink>
            </li>
        </ul>
        <button
          className="btn-menu"
          onClick={() => toggleMenu()}
        >
          MENU
        </button>
    </div>
  )
};

export default NavBar;
