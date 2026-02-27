import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SmoothReset({ controlsRef, resettingRef }) {
  useFrame(() => {
    if (!resettingRef.current || !controlsRef.current) return;

    const controls = controlsRef.current;

    const polar = controls.getPolarAngle();
    const azimuth = controls.getAzimuthalAngle();

    const targetPolar = Math.PI / 2;
    const targetAzimuth = 0;

    controls.setPolarAngle(
      THREE.MathUtils.lerp(polar, targetPolar, 0.08)
    );
    controls.setAzimuthalAngle(
      THREE.MathUtils.lerp(azimuth, targetAzimuth, 0.08)
    );

    controls.update();

    if (
      Math.abs(polar - targetPolar) < 0.001 &&
      Math.abs(azimuth - targetAzimuth) < 0.001
    ) {
      resettingRef.current = false;
    }
  });

  return null;
}

export default SmoothReset;