import v1 from "/videos/edits/Video-1.mov";
import v2 from "/videos/edits/Video-2.mov";
import v3 from "/videos/edits/Video-3.mov";
import v4 from "/videos/edits/Video-4.mp4";
import v5 from "/videos/edits/Video-5.mov";
import v6 from "/videos/edits/Video-6.mov";
import v7 from "/videos/edits/Video-7.mov";
import v8 from "/videos/edits/Video-8.mov";
import Resume from "./resume.jsx";
import Contact from "./contact.jsx";

function Projects() {
  return (
    <section className="bg-zinc-900 px-6 py-20 relative">
      <h2 className="text-5xl font-iceberg text-white mb-12">Editing</h2>
      <div className="bg-orange h-full w-[30%] absolute top-50 right-[15%] z-1"></div>
      <div className="grid grid-cols-2 gap-6 auto-rows-[200px]">
        <BrickVideo src={v1} span="row-span-2" />
        <BrickVideo src={v2} span="row-span-1" />
        <BrickVideo src={v3} span="row-span-3" />
        <BrickVideo src={v4} span="row-span-2" />
        <BrickVideo src={v5} span="row-span-2" />
        <BrickVideo src={v6} span="row-span-3" />
        <BrickVideo src={v7} span="row-span-2" />
        <BrickVideo src={v8} span="row-span-1" />
        {/* load pade che website par to background ma bandh karavi devanu che  */}
      </div>
      <Resume />
      <Contact />
    </section>
  );
}

function BrickVideo({ src, span }) {
  return (
    <div className={`relative group overflow-hidden rounded-lg z-1 ${span}`}>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Projects;
