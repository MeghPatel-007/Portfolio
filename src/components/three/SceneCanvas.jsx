import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useState } from "react";
import Lighting from "./Lighting.jsx";
import SwordModel from "./SwordModel.jsx";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import SmoothReset from "../common/smoothreset.jsx";
import { motion } from "framer-motion";
import { TOUCH } from "three";

function SceneCanvas({ startAnimation }) {
  const controlsRef = useRef();
  const resettingRef = useRef(false);
  const timeoutRef = useRef();

  const scheduleReset = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      resettingRef.current = true;
    }, 100);
  };

const isTouch = window.matchMedia("(pointer: coarse)").matches;

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-screen z-10 touch-pan-y"
      initial={{ opacity: 0 }}
      animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Canvas
        frameloop="demand"
        dpr={[1, 1.5]}
        camera={{ position: [0, 1.5, 8], fov: 50 }}
        gl={{ antialias: false }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <Lighting />
          <SwordModel autoRotate={isTouch} />
          <EffectComposer>
            <Bloom
              intensity={1.2}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              radius={0.8}
            />
          </EffectComposer>
          {!isTouch&&(
            <OrbitControls
              rotateSpeed={0.8}
              ref={controlsRef}
              enableZoom={false}
              enablePan={false}
              onStart={scheduleReset}
              onEnd={scheduleReset}
              enableDamping
              dampingFactor={0.9}
            />
          )}
          <SmoothReset controlsRef={controlsRef} resettingRef={resettingRef} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}

export default SceneCanvas;
