import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
  SiThreedotjs,
  SiPostgresql,
  SiExpress,
  SiBootstrap,
  SiCanva,
  SiPython,
  SiC,
  SiCplusplus,
  SiGithub,
  SiDavinciresolve,
  SiAssemblyscript,
} from "react-icons/si";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section className="min-h-screen px-10 py-20 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white">
      <h2 className="text-5xl font-iceberg mb-16">Skills</h2>

      <div className="space-y-16">
        <SkillGroup
          title="Languages"
          skills={[
            {
              icon: <SiJavascript />,
              label: "JavaScript",
              color: "text-yellow-300",
            },
            { icon: <SiPython />, label: "Python", color: "text-yellow-500" },
            { icon: <SiC />, label: "C", color: "text-blue-600" },
            { icon: <SiCplusplus />, label: "C++", color: "text-blue-800" },
            {
              icon: <SiAssemblyscript />,
              label: "AssemblyScript",
              color: "text-purple-400",
            },
          ]}
        />

        <SkillGroup
          title="Frontend"
          skills={[
            { icon: <SiReact />, label: "React", color: "text-sky-400" },
            {
              icon: <SiTailwindcss />,
              label: "Tailwind",
              color: "text-sky-500",
            },
            { icon: <SiHtml5 />, label: "HTML", color: "text-orange-500" },
            { icon: <SiCss3 />, label: "CSS", color: "text-blue-500" },
            {
              icon: <SiBootstrap />,
              label: "Bootstrap",
              color: "text-purple-600",
            },
            {
              icon: <SiThreedotjs />,
              label: "Three.js",
              color: "text-gray-400",
            },
          ]}
        />

        <SkillGroup
          title="Backend"
          skills={[
            {
              icon: <SiExpress />,
              label: "Express.js",
              color: "text-gray-400",
            },
            {
              icon: <SiPostgresql />,
              label: "PostgreSQL",
              color: "text-blue-700",
            },
          ]}
        />

        <SkillGroup
          title="Tools"
          skills={[
            { icon: <SiGit />, label: "Git", color: "text-red-500" },
            { icon: <SiGithub />, label: "GitHub", color: "text-gray-500" },
            { icon: <SiFigma />, label: "Figma", color: "text-pink-400" },
          ]}
        />

        <SkillGroup
          title="Creative"
          skills={[
            { icon: <SiCanva />, label: "Canva", color: "text-green-500" },
            {
              icon: <SiDavinciresolve />,
              label: "DaVinci Resolve",
              color: "text-gray-300",
            },
          ]}
        />
      </div>
    </section>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <div>
      <h3 className="text-2xl font-iceberg mb-6 text-orange">{title}</h3>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </motion.div>
    </div>
  );
}

function Skill({ icon, label, color }) {
  return (
    <motion.div
      variants={item}
      className="flex flex-col items-center gap-3 rounded-lg p-4 hover:shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_40px_rgba(255,83,8,0.45)] transition-shadow duration-300"
    >
      <div className={`text-5xl ${color}`}>{icon}</div>
      <span className="text-sm tracking-wide text-gray-400">{label}</span>
    </motion.div>
  );
}
