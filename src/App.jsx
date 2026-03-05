import { lazy, Suspense, useState } from "react";
import { AnimatePresence } from "framer-motion";

import NavBar from "./components/common/navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/skills.jsx";
import HorizontalProjects from "./sections/projects.jsx";

import SceneCanvas from "./components/three/SceneCanvas.jsx";
import Loader from "./components/common/loader.jsx";
import Contactextended from "./sections/contactextended.jsx";

import { useEffect } from "react";

const Editing = lazy(() => import("./sections/editing.jsx"));

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar startAnimation={loadingFinished} />
      <SceneCanvas startAnimation={loadingFinished} />

      <AnimatePresence mode="wait">
        {!loadingFinished && (
          <Loader onFinish={() => setLoadingFinished(true)} />
        )}
      </AnimatePresence>

      {/* Always render the page */}
      <Hero startAnimation={loadingFinished} />
      <About startAnimation={loadingFinished} />
      <Skills />
      <HorizontalProjects />

      <Suspense fallback={null}>
        <Editing />
      </Suspense>

      <Contactextended />
    </>
  );
}

export default App;
