import React, { Fragment } from "react";
import "ionicons/dist/ionicons";

import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";

const App = () => {
  return (
    <Fragment>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main class="animate-in1">
        <About />
      </main>
    </Fragment>
  );
};

export default App;
