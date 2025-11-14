import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Lighting from "./Lighting.jsx";
import BikeModel from "./BikeModel.jsx";

function SceneCanvas() {
  return (
     <div className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none">
    <Canvas
      shadows
      camera={{ position: [0, 1.5, 8], fov: 50 }}
      gl={{ antialias: true }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <Lighting />
        <BikeModel />̥
      </Suspense>
    </Canvas>  
    </div>
  );
}

export default SceneCanvas;
