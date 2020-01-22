import React, { Fragment } from "react";

const NavBar = () => (
  <Fragment>
    <div className="overlayer"></div>
    <nav className="main-nav animate-in1">
      <div className="logo animate-in">moe.abo</div>
      <div className="menu-btn  animate-in">
        <ion-icon name="options"></ion-icon>
      </div>
      <ul className="menu">
        <li className="nav-item"></li>
        <li className="nav-item">
          <a href="#home" className="nav-link">
            home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">
            about
          </a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link">
            skills
          </a>
        </li>
        <li className="nav-item">
          <a href="#work" className="nav-link">
            work
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            contact
          </a>
        </li>
      </ul>
    </nav>
  </Fragment>
);

export default NavBar;
