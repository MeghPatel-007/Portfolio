import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    src: "https://res.cloudinary.com/dd4vpchfg/video/upload/v1772820087/gemini_iwsn5o.mp4",
    title: "Gemini",
    link: "https://gemini-three-orcin.vercel.app/",
  },
  {
    src: "https://res.cloudinary.com/dd4vpchfg/video/upload/v1772820156/Lace_Up_hpvtpt.mp4",
    title: "Lace Up",
    link: "https://lace-up-lilac.vercel.app/",
  },
  {
    src: "https://res.cloudinary.com/dd4vpchfg/video/upload/v1772820100/netflix_qrsxuc.mp4",
    title: "Netflix Clone",
    link: "https://netflix-inky-pi.vercel.app/",
  },
  {
    src: "https://res.cloudinary.com/dd4vpchfg/video/upload/v1772820093/rps_dowa0d.mp4",
    title: "Rock Paper Scissors",
    link: "https://rock-paper-scissor-livid-eta.vercel.app/",
  },
  {
    src: "https://res.cloudinary.com/dd4vpchfg/video/upload/v1772820098/tic_tac_toe_mywsbx.mp4",
    title: "Tic Tac Toe",
    link: "https://tic-tac-toe-beta-gold-31.vercel.app/",
  },
];

function HorizontalProjects() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // move full width minus 1 panel
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(projects.length - 1) * 25}%`],
  );

  return (
    <section
      id="Projects"
      ref={sectionRef}
      className="relative h-[500vh] bg-gradient-to-b from-black via-zinc-950 to-zinc-900"
    >
      <h2 className="text-5xl font-iceberg mb-10 text-white px-10">Projects</h2>

      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full"
          style={{ width: `${projects.length * 100}vw`, x }}
        >
          {projects.map((p, i) => (
            <HorizontalPanel
              key={i}
              src={p.src}
              title={p.title}
              link={p.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
function HorizontalPanel({ src, title, link }) {
  return (
    <div className="w-screen h-full flex items-center justify-center">
      <motion.div
        className="mx-2 h-[90%] relative group rounded-2xl overflow-hidden border-3 border-orange shadow-[0_0_20px_rgba(255,83,8,0.6),0_0_40px_rgba(255,83,8,0.4),0_0_40px_rgba(255,83,8,0.2)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover "
        />

        <div className="absolute bottom-6 left-6 bg-gray-400 rounded-lg opacity-90 border border-gray-600 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <h3 className="text-3xl font-iceberg text-black p-2">{title}</h3>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-gray-900/60
           translate-y-full
           [@media(hover:hover)]:group-hover:translate-y-0
           transition-transform duration-300
           flex items-center justify-center"
        >
          <span className="text-white text-lg font-semibold">
            View Details →
          </span>
        </a>
      </motion.div>
    </div>
  );
}

export default HorizontalProjects;
