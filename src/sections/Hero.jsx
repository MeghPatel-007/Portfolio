import { motion } from "framer-motion";
function Hero({ startAnimation }) {
  function Strip({ height, start }) {
    return (
      <motion.div
        className="w-[20%] bg-zinc-900 shadow-[0_4px_6px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.4)]"
        initial={{ height: 0 }}
        animate={start ? { height } : { height: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      />
    );
  }
  return (
    <>
      <div
        id="hero"
        className="w-full h-screen flex flex-col items-center justify-center bg-black bg-center z-50"
      >
        <div
          className="text-5xl font-semi-bold text-white font-ADLaM-Display select-none md:text-8xl lg:text-[10rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={
            startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        >
          <span className="text-orange">W</span>ELCO
          <span className="text-orange">M</span>E
        </div>
      </div>
      <div className="w-full h-screen flex absolute bottom-0 scale-[-1]">
        <Strip height="50%" start={startAnimation} />
        <Strip height="35%" start={startAnimation} />
        <Strip height="15%" start={startAnimation} />
        <Strip height="35%" start={startAnimation} />
        <Strip height="50%" start={startAnimation} />
      </div>
      <div className="w-full">
        <motion.div
          className="h-4 bg-orange absolute bottom-15 left-0 shadow-[inset_5px_6px_10px_rgba(0,0,0,0.3)]"
          initial={{ width: 0 }}
          animate={startAnimation ? { width: "90%" } : { width: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        ></motion.div>
        <motion.div
          className="h-4 bg-orange absolute bottom-5 right-0 shadow-[inset_5px_6px_10px_rgba(0,0,0,0.3)]"
          initial={{ width: 0 }}
          animate={startAnimation ? { width: "90%" } : { width: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        ></motion.div>
      </div>
    </>
  );
}

export default Hero;
