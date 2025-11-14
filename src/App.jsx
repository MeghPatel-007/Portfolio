import NavBar from "./components/common/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import SceneCanvas from "./components/three/SceneCanvas.jsx";

function App() {
  return (
    <>
      <NavBar />
      <SceneCanvas />
      <Hero />
    </>
  );
}

export default App;
