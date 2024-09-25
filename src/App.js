import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Tasks from "./Tasks";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useRef } from "react";
import Skills from "./Skills";
import Aos from "aos";

import gray from "./media/gray.jpeg";
import Portfolio from "./Portfolio";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const ref = useRef();
  return (
    <>
      <NavBar />
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
          className="md:h-screen"
          style={{
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} factor={3}>
          <div className="md:px-4 lg:px-8 xl:px-16">
            {/* Adjust the padding for different screen sizes */}
            <Skills />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          className="md:h-screen"
          style={{}}
        >
          <Portfolio />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1}
          onClick={() => ref.current.scrollTo(0)}
          className="md:h-screen"
          style={{
            minHeight: "100vh",
          }}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
