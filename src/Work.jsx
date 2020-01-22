import React from "react";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/4.jpg";

const Work = () => (
  <section className="work-section" id="work">
    <h1>
      work<span className="main-color">.</span>
    </h1>
    <div className="work-cat">
      <button id="designing" className="active">
        web design
      </button>
      <button id="project" className="">
        react project
      </button>
    </div>
    <div className="cat-designing showCat">
      <a href="#">
        <img src={img1} alt="" />
      </a>
      <a href="">
        <img src={img2} alt="" />
      </a>
      <a href="">
        <img src={img3} alt="" />
      </a>
    </div>
    <div className="cat-designing hideCat">
      <a href="#">
        <img src={img1} alt="" />
      </a>
      <a href="">
        <img src={img2} alt="" />
      </a>
    </div>
  </section>
);

export default Work;
