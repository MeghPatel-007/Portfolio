import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const projects = [
  {
    title: "Gemini",
    link: "https://gemini-three-orcin.vercel.app/",
    thumb:
      "https://res.cloudinary.com/dd4vpchfg/image/upload/f_auto,q_auto,w_1200/v1772863204/gemini_y0wz7w.png",
  },
  {
    title: "Lace Up",
    link: "https://lace-up-lilac.vercel.app/",
    thumb:
      "https://res.cloudinary.com/dd4vpchfg/image/upload/f_auto,q_auto,w_1200/v1772863203/Laceup_n3jyz7.png",
  },
  {
    title: "Netflix Clone",
    link: "https://netflix-inky-pi.vercel.app/",
    thumb:
      "https://res.cloudinary.com/dd4vpchfg/image/upload/f_auto,q_auto,w_1200/v1772863220/Netfilx_qnimmu.png",
  },
  {
    title: "Rock Paper Scissors",
    link: "https://rock-paper-scissor-livid-eta.vercel.app/",
    thumb:
      "https://res.cloudinary.com/dd4vpchfg/image/upload/f_auto,q_auto,w_1200/v1772863204/rps_twpli9.png",
  },
  {
    title: "Tic Tac Toe",
    link: "https://tic-tac-toe-beta-gold-31.vercel.app/",
    thumb:
      "https://res.cloudinary.com/dd4vpchfg/image/upload/f_auto,q_auto,w_1200/v1772863206/ttt_ovqevt.png",
  },
];

function HorizontalProjects() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // total horizontal movement
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(projects.length - 1) * 100}%`]
  );

  // smooth animation
  const smoothX = useSpring(x, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>
      <h2 className="text-5xl bg-black font-iceberg text-white px-10">
        Projects
      </h2>

      <section
        ref={container}
        className="relative bg-gradient-to-b from-black to-zinc-900 h-screen"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={{ x: smoothX ,width: `${projects.length * 100}%`}}
            className="flex h-full"
          >
            {projects.map((p) => (
              <Panel key={p.title} {...p} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Panel({ thumb, title, link }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[90%] h-[80%] rounded-xl overflow-hidden border border-orange"
      >
        <img
          src={thumb}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-6 left-6 bg-gray-400 px-4 py-2 rounded">
          <h3 className="text-2xl font-iceberg text-black">{title}</h3>
        </div>
      </a>
    </div>
  );
}

export default HorizontalProjects;