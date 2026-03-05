import { motion } from "framer-motion";
function About({ startAnimation }) {
  return (
    <section id="About" className="w-full h-screen bg-zinc-900 border-0 ">
      <div className="w-full relative">
        {/* about */}
        <motion.div
          className="w-[65%] h-25 text-6xl  top-20 md:top-0 md:w-[55%] pl-5 lg:h-50 bg-orange absolute right-0 text-left flex items-center md:pl-10 lg:text-[10rem] font-semi-bold text-white font-ADLaM-Display md:text-8xl md:h-40 shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
          style={!startAnimation && { display: "none" }}
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <span className="text-black">A</span>bo
          <span className="text-black">u</span>t
        </motion.div>
        {/* i turn pixels & */}
        <motion.div
          className="h-22 top-45 left-5 w-[50%] bg-orange absolute flex justify-center items-center md:w-[40%] md:h-28 md:left-20 md:top-39 lg:h-36 lg:top-49 lg:left-40 xl:w-[30%] xl:left-60 shadow-[inset_0_-6px_10px_rgba(0,0,0,0.35)] "
          style={!startAnimation && { display: "none" }}
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center">
            <div className="flex flex-col">
              <div className="font-iceberg text-sm md:text-base lg:text-lg">
                I turn
              </div>
              <div className="text-3xl md:text-6xl lg:text-7xl">
                {/* p => Leckerli One I=>Kyiv*Type Titling X=>Jacquarda Bastarda 9 E=>Iceberg L=>Jersey 20  s=>Gravitas One*/}
                <span className="font-leckerli-one">P</span>
                <span className="font-bebas-neue">I</span>
                <span className="font-jacquarda-bastarda-9">X</span>
                <span className="font-iceberg">E</span>
                <span className="font-jersey-20">L</span>
                <span className="font-gravitas-one">S</span>
              </div>
            </div>
            <div className="text-7xl lg:text-9xl font-iceberg lg:ml-5 md:text-8xl md:ml-3 ">
              &
            </div>
          </div>
        </motion.div>
        {/* <logic> */}
        <div className="right-5 text-6xl top-72 text-white font-iceberg absolute z-1 md:text-8xl md:top-60 md:right-20 lg:text-[8.5rem] lg:top-81 lg:right-23 xl:right-75 ">
          &lt;logic&gt;
        </div>
        {/* Stories into */}
        <motion.div
          className="h-20 top-90 w-[75%] bg-orange absolute text-center flex justify-center items-center md:h-25 md:top-84 lg:h-35 lg:top-115 xl:w-[70%] shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_8px_15px_rgba(0,0,0,0.35)] "
          style={!startAnimation && { display: "none" }}
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <span className="text-5xl font-ADLaM-Display lg:text-8xl md:text-7xl">
            Stories
          </span>
          <span className="absolute font-iceberg right-3 top-2 lg:text-[2rem] md:text-[1.5rem]">
            Into
          </span>
        </motion.div>
        {/* that */}
        <div className="text-[1.5rem] top-113 right-30 text-white font-iceberg md:text-[2rem] lg:top-155 lg:text-[2.5rem] lg:left-150 absolute md:left-120 md:top-114 xl:left-200">
          That
        </div>
        {/* moves */}
        {/* M=>icebreg O=>Hurricane v=>Irish Grover e=>Jomolhari s=>Josefin Sans */}
        <motion.div
          className="w-[75%] h-4 md:h-6 bg-orange absolute top-125 lg:top-177 lg:h-7 right-0 md:top-130 xl:top-175 shadow-[0_4px_6px_rgba(0,0,0,0.4)] "
          style={!startAnimation && { display: "none" }}
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.div
          className="right-10 w-[80%] md:w-[75%] h-4 md:h-6 bg-orange absolute top-135 lg:h-7 lg:top-188 md:right-10 z-1 md:top-140 xl:top-185 shadow-[0_6px_10px_rgba(0,0,0,0.45)] "
          style={!startAnimation && { display: "none" }}
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.div
          className="w-[75%] h-4 md:h-6 bg-orange absolute top-145 lg:top-200 right-0 md:top-150 lg:h-7 xl:top-195 shadow-[0_4px_6px_rgba(0,0,0,0.4)] "
          style={!startAnimation && { display: "none" }}
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        ></motion.div>
        <div className="left-10 top-128  text-6xl text-white font-iceberg lg:text-[6.5rem] lg:top-175 lg:left-70 lg:text-[7.5rem] absolute gap-3 flex md:text-8xl md:top-130 md:left-70 xl:text-[7rem] xl:left-100 xl:top-175">
          <span className="font-iceberg">M</span>
          <span className="font-hurricane">O</span>
          <span className="font-irish-grover md:ml-5">V</span>
          <span className="font-jomolhari md:ml-5">E</span>
          <span className="font-josefin-sans md:ml-3">s</span>
        </div>
      </div>
    </section>
  );
}

export default About;

//redesign acc to responsiveness
