import React from "react";
import img from "/images/resume.jpg";
import pdf from "/pdf/resume.pdf";
import { motion } from "framer-motion";

function Resume() {
  return (
    <section id="Resume" className="bg-zinc-900 px-6 py-20 relative ">
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
                src={img}
                alt=""
                className="w-90 h-60 md:w-150 md:h-100 lg:w-full lg:h-full object-cover rounded-lg "
              />
            </motion.a>
          </motion.div>
          <div className="w-full h-full"></div>
        </div>
      </div>
      <motion.button
        className="absolute bottom-20 right-12  md:bottom-12 md:right-[16%] lg:bottom-16 lg:right-[17%] xl:right-[20%] bg-gray text-black font-iceberg px-6  md:px-10 lg:px-16  py-2.5  text-[12px]  md:text-lg rounded-full shadow-md flex items-center justify-center transition duration-200 hover:brightness-105 active:scale-95 z-10 "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <a href={pdf} download="Megh_Patel_resume.pdf">
          Download CV
        </a>
      </motion.button>
    </section>
  );
}

export default Resume;
