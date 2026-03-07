import { lazy, Suspense, useState } from "react";
import { AnimatePresence } from "framer-motion";

import NavBar from "../components/common/navbar.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Skills from "../sections/skills.jsx";
import HorizontalProjects from "../sections/projects.jsx";

import Loader from "../components/common/loader.jsx";
import Contactextended from "../sections/contactextended.jsx";
import Resume from "../sections/resume.jsx";

import { useEffect } from "react";

const SceneCanvas = lazy(() => import("../components/three/SceneCanvas.jsx"));

function Home() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar startAnimation={loadingFinished} />
<Suspense fallback={null}>
  <SceneCanvas startAnimation={loadingFinished} />
</Suspense>

      <AnimatePresence mode="wait">
        {!loadingFinished && (
          <Loader onFinish={() => setLoadingFinished(true)} />
        )}
      </AnimatePresence>

      <Hero startAnimation={loadingFinished} />
      <About startAnimation={loadingFinished} />
      <Skills />
      <HorizontalProjects />
      <Resume />
      <Contactextended />
    </>
  );
}

export default Home;
