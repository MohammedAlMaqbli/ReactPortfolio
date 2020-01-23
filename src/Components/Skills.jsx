import React from "react";

const Skills = ({ forwardRef }) => (
  <section className="skills-section" id="skills" ref={forwardRef}>
    <h1>
      skills<span className="main-color">.</span>
    </h1>
    <p className="skill-info">
      I'm a hardcore coder and this are some of my skills.
    </p>

    <div className="html">
      <div className="tag-html">
        <p>HTML</p>
      </div>
      <div className="prograss-bar">
        <div className="bar-html"></div>
      </div>
    </div>

    <div className="html">
      <div className="tag-css">
        <p>CSS</p>
      </div>
      <div className="prograss-bar">
        <div className="bar-css"></div>
      </div>
    </div>
    <div className="html">
      <div className="tag-javascript">
        <p>JS</p>
      </div>
      <div className="prograss-bar">
        <div className="bar-javascript"></div>
      </div>
    </div>

    <div className="html">
      <div className="tag-react">
        <p>React</p>
      </div>
      <div className="prograss-bar">
        <div className="bar-react"></div>
      </div>
    </div>
  </section>
);

export default Skills;
