import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

function SwordModel() {
  const group = useRef();
  const { scene } = useGLTF("/models/new sword.glb");
  const { viewport } = useThree();

  // material setup ONCE
  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh && obj.material) {
        obj.material.emissive.set("#ff7a00");
        obj.material.emissiveIntensity = 1.2;
        obj.material.color.set("#ffaa55");
        obj.material.toneMapped = false;
      }
    });
  }, [scene]);

  const scale = viewport.width < 6 ? 1.4 : viewport.width < 10 ? 1.8 : 2.5;
  const rot =
    viewport.width < 6
      ? [180 * (Math.PI / 180), 90 * (Math.PI / 180), 0 * (Math.PI / 180)]
      : viewport.width < 10
        ? [180 * (Math.PI / 180), 90 * (Math.PI / 180), 0 * (Math.PI / 180)]
        : [90 * (Math.PI / 180), 0, 270 * (Math.PI / 180)];

  const pos =
    viewport.width < 6
      ? [0, 0.5, 0]
      : viewport.width < 10
        ? [0, 0.7, 0]
        : [-1, 0, 0];

  return (
    <primitive
      ref={group}
      object={scene}
      position={pos}
      rotation={rot}
      scale={scale}
    />
  );
}

export default SwordModel;
