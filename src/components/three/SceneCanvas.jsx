import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Lighting from "./Lighting.jsx";
import SwordModel from "./SwordModel.jsx";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function SceneCanvas() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen position-relative z-10 pointer-events-none">
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 8], fov: 50 }}
        gl={{ antialias: true }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <Lighting />
          <SwordModel />
          <EffectComposer>
            <Bloom
              intensity={1.2}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              radius={0.8}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SceneCanvas;
