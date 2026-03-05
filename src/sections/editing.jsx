import v1 from "/videos/edits/Video-1.mp4";
import v2 from "/videos/edits/Video-2.mp4";
import v3 from "/videos/edits/Video-3.mp4";
import v4 from "/videos/edits/Video-4.mp4";
import v5 from "/videos/edits/Video-5.mp4";
import v6 from "/videos/edits/Video-6.mp4";
import v7 from "/videos/edits/Video-7.mp4";
import v8 from "/videos/edits/Video-8.mp4";
import Resume from "./resume.jsx";
import Contact from "./contact.jsx";
import { useEffect } from "react";
import { motion } from "framer-motion";

function editing({ onReady }) {
  useEffect(() => {
    onReady?.();
  }, []);
  return (
    <>
      <section className="bg-zinc-900 px-6 pt-20 relative" id="editing">
        <h2 className="text-5xl font-iceberg text-white mb-12">Editing</h2>
        <motion.div
          className="bg-orange h-[95.5%] md:h-[97%] lg:h-[98%] xl:h-[99%] w-[30%] absolute top-50 right-[15%] z-1
  shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_8px_15px_rgba(0,0,0,0.35)]"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />
        <div className="grid grid-cols-2 gap-6 auto-rows-[200px]">
          <BrickVideo src={v1} span="row-span-2" />
          <BrickVideo src={v2} span="row-span-1" />
          <BrickVideo src={v3} span="row-span-2" />
          <BrickVideo src={v4} span="row-span-2" />
          <BrickVideo src={v6} span="row-span-3" />
          <BrickVideo src={v7} span="row-span-2" />
          <BrickVideo src={v5} span="row-span-1" />
          <BrickVideo src={v8} span="row-span-1" />
        </div>
        <Resume />
        <Contact />
      </section>
    </>
  );
}

function BrickVideo({ src, span }) {
  return (
    <div className={`relative group overflow-hidden rounded-lg z-1 ${span}`}>
      <video
        src={src}
        preload="metadata"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default editing;
