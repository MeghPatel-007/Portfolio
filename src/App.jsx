import NavBar from "./components/common/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import SceneCanvas from "./components/three/SceneCanvas.jsx";
import About from "./sections/About.jsx";
import HorizontalProjects from "./sections/projects.jsx";
import Skills from "./sections/skills.jsx";
import Projects from "./sections/editing.jsx";
import Resume from "./sections/resume.jsx";
import Contact from "./sections/contact.jsx";
import Lazyloading from "./components/three/lazyloading.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Lazyloading />
      <Hero />
      <About />
      <Skills />
      <HorizontalProjects />
      <Projects/>
    </>
  );
}

export default App;
