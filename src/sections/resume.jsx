import React from "react";
import pdf from "/pdf/resume.pdf";
import { motion } from "framer-motion";
import Contact from "./contact.jsx";
const img =
  "https://res.cloudinary.com/dd4vpchfg/image/upload/v1772821499/sword_fa3olj.png";
const preview =
  "https://res.cloudinary.com/dd4vpchfg/image/upload/v1772821506/resume_stz1bw.jpg";

function Resume() {
  return (
    <section id="Resume" className="bg-zinc-900 px-6 py-20 relative">
      <motion.div
        className="bg-orange h-[95.5%] md:h-[97%] lg:h-[98%] xl:h-[99%] w-[44%] absolute right-0 top-50 z-[1]
  shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_8px_15px_rgba(0,0,0,0.35)] flex flex-col rounded-l-lg overflow-hidden"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "44%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.button
          className="  bg-gray text-black font-iceberg px-6 md:px-10 lg:px-16 py-2.5 text-[12px] md:text-lg rounded-full shadow-md flex items-center justify-center transition duration-200 hover:brightness-105 active:scale-95 text-sm mx-5 mt-60 md:mt-100 md:mx-20 lg:mt-120 lg:mx-29 xl:mt-170 xl:mx-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <a href={pdf} download="Megh_Patel_resume.pdf">
            Download CV
          </a>
        </motion.button>
      </motion.div>
      <h2 className="text-5xl font-iceberg text-white mb-30">Resume</h2>
      <div className="z-0">
        <div className="md:ml-[5%] flex  w-[75%] justify-center items-center ">
          <motion.div
            className="lg:w-full lg:h-full bg-orange rounded-lg flex items-center justify-center  "
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 10 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl font-iceberg bg-gray p-1 md:p-2 rounded-lg h-full  "
              initial={{ rotate: 0 }}
              whileInView={{ rotate: -10 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src={preview}
                alt=""
                className="w-90 h-60 md:w-150 md:h-100 lg:w-full lg:h-full object-cover rounded-lg "
              />
            </motion.a>
          </motion.div>
          <div className="w-full h-full"></div>
        </div>
      </div>
      <Contact />
    </section>
  );
}

export default Resume;
