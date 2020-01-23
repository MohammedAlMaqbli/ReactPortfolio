import React, { Fragment, useEffect, useRef, useState } from "react";
import "ionicons/dist/ionicons";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import gsap from "gsap";
import { useIntersection } from "react-use";

function useOnScreen(ref, rootMargin = "0px", threshold = 0) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
        threshold
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

const App = () => {
  // NavBar Animation init
  const navTl = gsap.timeline({ paused: true });
  //Ref .skills-section to animate
  const skillsSection = useRef(null);
  //skillsTimeline Anumation
  const skillsTimeline = gsap.timeline({ defaults: { duration: 1 } });
  const intersectionSkills = useOnScreen(skillsSection);
  const animateSkills = () => {
    skillsTimeline
      .fromTo(
        ".bar-html",
        0.75,
        { width: "calc(0% - 6px)" },
        { width: "calc(90% - 6px)", ease: "Power4.out" }
      )
      .fromTo(
        ".bar-css",
        0.75,
        { width: "calc(0% - 6px)" },
        { width: "calc(87% - 6px)", ease: "Power4.out" }
      )
      .fromTo(
        ".bar-javascript",
        0.75,
        { width: "calc(0% - 6px)" },
        { width: "calc(95% - 6px)", ease: "Power4.out" }
      )
      .fromTo(
        ".bar-react",
        0.75,
        { width: "calc(0% - 6px)" },
        { width: "calc(80% - 6px)", ease: "Power4.out" }
      );
  };

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
  const handelMenuClick = () => {
    navTl.reversed() ? navTl.play() : navTl.reverse();
  };
  useEffect(() => {
    animate();
    animateNav();
  }, []);
  if (intersectionSkills) {
    animateSkills();
  }

  return (
    <Fragment>
      <header>
        <NavBar onClick={handelMenuClick} />
        <Hero />
      </header>
      <main className="animate-in1">
        <About />
        <Skills forwardRef={skillsSection} />
        <Work />
        <Contact />
        <Footer />
      </main>
    </Fragment>
  );
};

export default App;
