import React, { Fragment } from "react";
import ringImg from "../img/ring.png";

const Hero = () => (
  <Fragment>
    <div className="hero">
      <div className="containter animate-in hero-text">
        <h1 className="hero-header-text animate-in line animate-typewriter">
          hi, i'm <span>moe abo</span>, i'm a web developer <span>^</span>_
          <span>^.</span>
        </h1>
        <p className="hero-text-p animate-in">
          Welcome to my website have fun!
        </p>
        <div className="buttons">
          <button className="main-btn">download c.v</button>
          <button className="secondary-btn">about me</button>
        </div>
      </div>

      <div className="containter">
        <div className="loading-screen">
          <div className="loader">
            <div className="ringOne ring">
              <img src={ringImg} alt="" />
            </div>
            <div className="ringTwo ring">
              <img src={ringImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Hero;
