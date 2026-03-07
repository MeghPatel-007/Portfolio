import { Canvas } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import Lighting from "./Lighting.jsx";
import SwordModel from "./SwordModel.jsx";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";
import SmoothReset from "../common/smoothreset.jsx";
import { motion } from "framer-motion";
import useMediaQuery from "../common/useMediaQuery.jsx";

function SceneCanvas({ startAnimation }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const controlsRef = useRef();
  const resettingRef = useRef(false);
  const timeoutRef = useRef();

  const scheduleReset = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      resettingRef.current = true;
    }, 100);
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-screen z-10"
      initial={{ opacity: 0 }}
      animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Canvas
        dpr={isMobile ? 1 : [1, 1.5]}
        camera={{ position: [0, 1.5, 8], fov: 50 }}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <Lighting />
          <SwordModel autoRotate={isMobile} />
          {!isMobile && (
            <>
              <EffectComposer>
                <Bloom
                  intensity={0.6}
                  luminanceThreshold={0.35}
                  luminanceSmoothing={0.2}
                  radius={0.6}
                />
              </EffectComposer>
              <OrbitControls
                rotateSpeed={0.8}
                ref={controlsRef}
                enableZoom={false}
                enablePan={false}
                onStart={scheduleReset}
                onEnd={scheduleReset}
                enableDamping
                dampingFactor={0.08}
              />
              <SmoothReset
                controlsRef={controlsRef}
                resettingRef={resettingRef}
              />
            </>
          )}
        </Suspense>
      </Canvas>
    </motion.div>
  );
}

export default SceneCanvas;
