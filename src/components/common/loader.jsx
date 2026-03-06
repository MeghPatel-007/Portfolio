import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

function Loader({ onFinish }) {
  const { progress, exit } = useProgress();


  return (
    <motion.div
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center isolate"
      initial={{ x: 0 }}
      animate={!exit ? { x: "100%" } : { x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={() => !exit && onFinish()}
    >
      {/* Orange sweep */}
      <motion.div
        className="h-screen bg-orange absolute top-0 left-0 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: `${progress}` }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ width: "100%" }}
      />

      {/* Animated Name */}
      <p className="text-white absolute text-3xl font-iceberg mix ">
        Megh Patel {Math.round(progress)}%
      </p>
    </motion.div>
  );
}

export default Loader;
