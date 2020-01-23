import React, { Fragment } from "react";

const NavBar = ({ onClick }) => (
  <Fragment>
    <div className="overlayer"></div>
    <nav className="main-nav animate-in1">
      <div className="logo animate-in">moe.abo</div>
      <div className="menu-btn  animate-in" onClick={onClick}>
        <ion-icon name="options"></ion-icon>
      </div>
      <ul className="menu">
        <li className="nav-item"></li>
        <li className="nav-item">
          <a href="#home" className="nav-link" onClick={onClick}>
            home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link" onClick={onClick}>
            about
          </a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link" onClick={onClick}>
            skills
          </a>
        </li>
        <li className="nav-item">
          <a href="#work" className="nav-link" onClick={onClick}>
            work
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link" onClick={onClick}>
            contact
          </a>
        </li>
      </ul>
    </nav>
  </Fragment>
);

export default NavBar;
