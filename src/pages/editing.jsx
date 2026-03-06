import v1 from "/videos/edits/Video-1.mp4";
import v2 from "/videos/edits/Video-2.mp4";
import v3 from "/videos/edits/Video-3.mp4";
import v4 from "/videos/edits/Video-4.mp4";
import v5 from "/videos/edits/Video-5.mp4";
import v6 from "/videos/edits/Video-6.mp4";
import v7 from "/videos/edits/Video-7.mp4";
import v8 from "/videos/edits/Video-8.mp4";
import { motion } from "framer-motion";
import NavBar from "../components/common/navbar";
import Loader from "../components/common/loader.jsx";
import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function Editing() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-zinc-900 px-6 pb-10 pt-30 relative " id="editing">
      <AnimatePresence mode="wait">
        {!loadingFinished && (
          <Loader onFinish={() => setLoadingFinished(true)} />
        )}
      </AnimatePresence>
      <NavBar startAnimation={loadingFinished} />
      <h2 className="text-5xl font-iceberg text-white mb-12">Editing</h2>
      <motion.div
        className="bg-orange h-full w-[30%] absolute top-0 right-[15%] z-1
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
    </section>
  );
}

function BrickVideo({ src, span }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`relative group overflow-hidden rounded-lg z-10 ${span}`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {visible && (
        <video
          src={src}
          autoPlay={visible}
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      )}
    </motion.div>
  );
}

export default Editing;
