import { motion } from "framer-motion";
import NavBar from "../components/common/navbar";
import Loader from "../components/common/loader.jsx";
import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const v1 = "https://res.cloudinary.com/dd4vpchfg/video/upload/v1772819088/Video-1_jatuhb.mp4";
const v2 ="https://res.cloudinary.com/dd4vpchfg/video/upload/v1772819095/Video-2_qacgxi.mp4";
const v3 = "https://res.cloudinary.com/dd4vpchfg/video/upload/v1772819263/Video-3_rxrgbe.mp4";
const v4 = "https://res.cloudinary.com/dd4vpchfg/video/upload/v1772819666/Video-4_o29cbb.mp4";
const v5 = "https://res.cloudinary.com/dd4vpchfg/video/upload/v1772819961/Video-5_by6yft.mp4";
const v6 = "https://res.cloudinary.com/dd4vpchfg/video/upload/v1772820047/Video-6_j7azmz.mp4";
const v7 = "https://res.cloudinary.com/dd4vpchfg/video/upload/v1772819295/Video-7_mqiune.mp4";
const v8 = "https://res.cloudinary.com/dd4vpchfg/video/upload/v1772819239/Video-8_nvt4w5.mp4";

function Editing() {
    const [loadingFinished, setLoadingFinished] = useState(false);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    
      <section className="bg-zinc-900 px-6 pt-20 pb-10 relative" id="editing">
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
  return (
    <div className={`relative group overflow-hidden rounded-lg z-1 ${span}`}>
      <video
        src={src}
        preload="metadata"
        autoPlay="visible"
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Editing;
