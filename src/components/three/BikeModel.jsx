import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { useControls } from "leva";

function BikeModel() {
  const group = useRef();
  const { scene } = useGLTF("./public/models/Hover_Bike_1k.glb");

  //          const { x, y, z, rotX, rotY, rotZ, scale } = useControls("Bike", {
  //     x: { value: 0, min: -10, max: 10, step: 0.1 },
  //     y: { value: -1.5, min: -10, max: 10, step: 0.1 },
  //     z: { value: 0, min: -10, max: 10, step: 0.1 },
  //     rotX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  //     rotY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  //     rotZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  //     scale: { value: 0.5, min: 0.1, max: 5, step: 0.01 },
  //   });

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });
  return <primitive ref={group} object={scene} position={[0, -1, 0]} />;
}

export default BikeModel;
