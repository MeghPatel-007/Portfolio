import laceUp from "/videos/projects/Lace Up.mp4";
import gemini from "/videos/projects/gemini.mp4";
import netflix from "/videos/projects/netflix.mp4";
import rps from "/videos/projects/rps.mp4";
import ttt from "/videos/projects/tic tac toe.mp4";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function HorizontalProjects() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // 3 panels → -200%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-gradient-to-b from-black via-zinc-950 to-zinc-900"
    >
      <h2 className="text-5xl font-iceberg mb-10 text-white px-10">Projects</h2>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          <HorizontalPanel src={gemini} title="Gemini" />
          <HorizontalPanel src={laceUp} title="Lace Up" />
          <HorizontalPanel src={netflix} title="Netflix Clone" />
          <HorizontalPanel src={rps} title="Rock Paper Scissors" />
          <HorizontalPanel src={ttt} title="Tic Tac Toe" />
        </motion.div>
      </div>
    </section>
  );
}

function HorizontalPanel({ src, title }) {
  return (
    <div className="w-screen h-full flex items-center justify-center">
      <div className="mx-1 h-[90%] relative group rounded-2xl overflow-hidden border-4 border-gray-600 ">
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        

        <div className="absolute bottom-6 left-6 bg-gray-400 rounded-lg  opacity-90 border border-gray-600 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <h3 className="text-3xl font-iceberg text-black bg-gray-400 rounded-lg p-2">
            {title}
          </h3>
        </div>
        <a
          href="/target-page"
          className="absolute inset-0 bg-gray-900/60
             translate-y-full
             group-hover:translate-y-0
             transition-transform duration-300
             flex items-center justify-center"
        >
          <span className="text-white text-lg font-semibold">View Details →</span>
        </a>
      </div>
    </div>
  );
}

export default HorizontalProjects;