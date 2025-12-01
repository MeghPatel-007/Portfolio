import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { GUI } from "lil-gui";
import * as THREE from "three";


function SwordModel() {
  const group = useRef();
  const { scene } = useGLTF("/models/new sword.glb");
// MAKE THE SWORD GLOW
scene.traverse((obj) => {
  if (obj.isMesh && obj.material) {
    obj.material.emissive = new THREE.Color("#ff7a00");  // orange glow
    obj.material.emissiveIntensity = 3;                  // glow strength
    obj.material.color = new THREE.Color("#ffaa55");      // warm base color
    obj.material.toneMapped = false;                     // REQUIRED for bloom
  }
});

  // how to scale for differnent screen sizes

  // useEffect(() => {
  //   const gui = new GUI();

  //   const params = {
  //     scale: 0.1,
  //     posX: 0,
  //     posY: -30,
  //     posZ: -100,
  //     rotY: 0,
  //     rotX: 0,
  //     rotZ: 0,
  //   };

  //   gui.add(params, "scale", 0.01, 30, 0.01).onChange((v) => {
  //     if (group.current) group.current.scale.set(v, v, v);
  //   });

  //   gui.add(params, "posX", -200, 200, 0.1).onChange((v) => {
  //     if (group.current) group.current.position.x = v;
  //   });
  //   gui.add(params, "posY", -200, 200, 1).onChange((v) => {
  //     if (group.current) group.current.position.y = v;
  //   });
  //   gui.add(params, "posZ", -300, 0, 1).onChange((v) => {
  //     if (group.current) group.current.position.z = v;
  //   });

  //   gui.add(params, "rotY", 0, 360, 1).onChange((v) => {
  //     if (group.current) group.current.rotation.y = v * (Math.PI / 180);
  //   });

  //   gui.add(params, "rotX", 0, 360, 1).onChange((v) => {
  //     if (group.current) group.current.rotation.x = v * (Math.PI / 180);
  //   });

  //   gui.add(params, "rotZ", 0, 360, 1).onChange((v) => {
  //     if (group.current) group.current.rotation.z = v * (Math.PI / 180);
  //   });

  //   return () => gui.destroy();
  // }, []);

  

  useFrame(() => {
    if (group.current) {
      group.current.rotation.x += 0.005;
    }
  });
  return (
    <primitive
      ref={group}
      object={scene}
      position={[-1,0, 0]}
       rotation={[
    90 * (Math.PI / 180),
    0 * (Math.PI / 180),
    270 * (Math.PI / 180)
  ]}
      scale={2.5}
    />
  );
}

export default SwordModel;
