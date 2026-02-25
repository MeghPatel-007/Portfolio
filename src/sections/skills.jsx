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
    SiAssemblyscript
} from "react-icons/si";

export default function Skills() {
  return (
    <>
        <div className="hidden lg:block w-full bg-zinc-900 h-36 xl:hidden 2xl:hidden border-0"></div>
    
    <section className="min-h-screen px-10 py-20 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white">
      <h2 className="text-5xl font-iceberg mb-10">Skills</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10">
        <Skill icon={<SiReact />} label="React" color="text-sky-400" />
        <Skill icon={<SiJavascript />} label="JavaScript" color="text-yellow-300" />
        <Skill icon={<SiTailwindcss />} label="Tailwind" color="text-sky-500" />
        <Skill icon={<SiHtml5 />} label="HTML" color="text-orange-500" />
        <Skill icon={<SiCss3 />} label="CSS" color="text-blue-500" />
        <Skill icon={<SiGit />} label="Git" color="text-red-500" />
        <Skill icon={<SiFigma />} label="Figma" color="text-pink-400" />
        <Skill icon={<SiThreedotjs />} label="Three.js" color="text-gray-400" />
        <Skill icon={<SiPostgresql />} label="PostgreSQL" color="text-blue-700" />
        <Skill icon={<SiExpress />} label="Express.js" color="text-gray-600" />
        <Skill icon={<SiBootstrap />} label="Bootstrap" color="text-purple-600" />
        <Skill icon={<SiCanva />} label="Canva" color="text-green-500" />
        <Skill icon={<SiPython />} label="Python" color="text-yellow-500" />
        <Skill icon={<SiC />} label="C" color="text-blue-600" />
        <Skill icon={<SiCplusplus />} label="C++" color="text-blue-800" />
        <Skill icon={<SiGithub />} label="GitHub" color="text-gray-500" />
        <Skill icon={<SiDavinciresolve />} label="DaVinci Resolve" color="text-gray-300" />
        <Skill icon={<SiAssemblyscript />} label="AssemblyScript" color="text-purple-400" />
      </div>
    </section>
    </>
  );
}

function Skill({ icon, label, color }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg p-4 border border-gray-600 hover:shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_40px_rgba(255,83,8,0.45)]
transition-shadow duration-300">
      <div className={`text-5xl ${color}`}>{icon}</div>
      <span className="text-sm tracking-wide text-gray-400">{label}</span>
    </div>
  );
}