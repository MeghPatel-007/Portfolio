import React from "react";
import { Environment } from "@react-three/drei";

const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.05} />

<directionalLight
  position={[4, 6, 8]}
  intensity={0.8}
  color={"#ffddaa"}   // warm to boost orange
/>

<directionalLight
  position={[-5, -2, -4]}
  intensity={0.4}
  color={"#88aaff"}   // cool rim for contrast
/>

<Environment preset="sunset" blur={0.8} />
    </>
  );
};

export default Lighting;
