import NavBar from "./components/common/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import SceneCanvas from "./components/three/SceneCanvas.jsx";
import About from "./sections/About.jsx";
import HorizontalProjects from "./sections/projectsHorizontal.jsx";
import Skills from "./sections/skills.jsx";
import Projects from "./sections/projects.jsx";

function App() {
  return (
    <>
      <NavBar />
      {/* <SceneCanvas /> */}
      <Hero />
      <About />
      <Skills />
      <HorizontalProjects />
      <Projects/>
    </>
  );
}

export default App;
