import React, { Fragment } from "react";
import "ionicons/dist/ionicons";

import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Work";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <Fragment>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main class="animate-in1">
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </Fragment>
  );
};

export default App;
