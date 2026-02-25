import laceUp from "/videos/Lace Up.mp4";
import gemini from "/videos/gemini.mp4";
import netflix from "/videos/netflix.mp4";
import rps from "/videos/rps.mp4";
import ttt from "/videos/tic tac toe.mp4";

function Projects() {
  return (
    <section className="bg-zinc-900 px-6 py-20">
      <h2 className="text-5xl font-iceberg text-white mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-2 gap-6 auto-rows-[200px]">
        <BrickVideo src={gemini} span="row-span-2" />
        <BrickVideo src={laceUp} span="row-span-1" />
        <BrickVideo src={netflix} span="row-span-3" />
        <BrickVideo src={rps} span="row-span-2" />
        <BrickVideo src={ttt} span="row-span-1" />
      </div>
    </section>
  );
}

function BrickVideo({ src, span }) {
  return (
    <div
      className={`relative group overflow-hidden rounded-lg ${span}`}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 bg-black/60
        translate-y-full group-hover:translate-y-0
        transition-transform duration-300
        flex items-center justify-center"
      >
        <span className="text-white text-lg font-semibold">
          View Details →
        </span>
      </div>
    </div>
  );
}

export default Projects;