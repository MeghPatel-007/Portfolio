import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SwordModel({ autoRotate }) {
  const group = useRef();
  const { scene } = useGLTF(
    "https://res.cloudinary.com/dd4vpchfg/image/upload/v1772862348/new-swords-final_pfs7u9.glb",
  );
  useGLTF.preload(
  "https://res.cloudinary.com/dd4vpchfg/image/upload/v1772862348/new-swords-final_pfs7u9.glb",
);
  const { viewport } = useThree();

  // material setup ONCE
  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh && obj.material) {
        obj.material.emissive = new THREE.Color("#ff7a00");
        obj.material.emissiveIntensity = 0.35;

        // let renderer handle tone mapping
        obj.material.toneMapped = true;

        obj.material.needsUpdate = true;
      }
    });
  }, [scene]);

  const scale = viewport.width < 6 ? 1.4 : viewport.width < 10 ? 1.8 : 2.5;
  const rot =
    viewport.width < 6
      ? [Math.PI, Math.PI / 2, 0]
      : viewport.width < 10
        ? [Math.PI, Math.PI / 2, 0]
        : [Math.PI / 2, 0, 1.5 * Math.PI];

  const pos =
    viewport.width < 6
      ? [0, 0.5, 0]
      : viewport.width < 10
        ? [0, 0.7, 0]
        : [-1, 0, 0];

  useFrame((state, delta) => {
    if (autoRotate && group.current) {
      group.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={group} position={pos} rotation={rot} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

export default SwordModel;
