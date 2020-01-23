import React, { Fragment, useEffect } from "react";
import "ionicons/dist/ionicons";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Work";
import Contact from "./Components/Contact";
import Footer from "./Footer";
import gsap from "gsap";
import { useIntersection } from "react-use";

const App = () => {
  // NavBar Animation init
  const navTl = new gsap.timeline({ paused: true });
  // Website Animation function
  const animate = () => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from(
      "header",
      {
        duration: 2,
        delay: 0,
        y: "-110%",
        ease: "Power4.out"
      },
      "-=0.1"
    )
      .from(".ringOne", {
        duration: 4,
        delay: 0,
        opacity: 0,
        y: 180,
        ease: "Power4.out"
      })
      .from(
        ".ringTwo",
        4,
        {
          duration: 4,
          delay: 0.9,
          opacity: 0,
          y: 180,
          ease: "Power4.out"
        },
        "-=5"
      )
      .to(".ringOne", {
        duration: 4,
        delay: 0.4,
        x: 380,
        ease: "Power4.out"
      })
      .to(
        ".ringTwo",
        {
          duration: 4,
          delay: 0.9,
          x: 380,
          ease: "Power4.out"
        },
        "-=5"
      )

      .from(
        ".animate-in1",
        3,
        {
          opacity: 0,
          y: 20,
          ease: "Power4.out"
        },
        "-=2.9"
      )
      .from(
        ".animate-in",
        3,
        {
          opacity: 0,
          y: 20,
          ease: "Power4.out"
        },
        "-=1.9"
      )
      .to("main", 1, { display: "block" });
  };
  // NavBar Animation function
  const animateNav = () => {
    navTl
      .to(".overlayer", {
        duration: 1,
        y: "100%",
        width: "100%",
        ease: "Power4.out"
      })
      .from(".nav-item", {
        duration: 1,
        x: -200,
        opacity: 0,
        stagger: 0.3,
        ease: "Power4.out"
      });
    navTl.reverse();
  };
  //  NavBar Animation open and close Nav
  const handelMenuClick = e => {
    navTl.reversed() ? navTl.play() : navTl.reverse();
  };
  useEffect(() => {
    animate();
    animateNav();
  }, []);
  return (
    <Fragment>
      <header>
        <NavBar onClick={handelMenuClick} />
        <Hero />
      </header>
      <main class="animate-in1">
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </main>
    </Fragment>
  );
};

export default App;
