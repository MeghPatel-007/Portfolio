import React from "react";
import img from "/images/resume.jpg";
import pdf from "/pdf/resume.pdf";

function Resume() {
  return (
    <section className="bg-zinc-900 px-6 py-20 relative ">
      <h2 className="text-5xl font-iceberg text-white mb-30">Resume</h2>
      <div className="z-0">
        <div className="md:ml-[5%] flex  w-[75%] justify-center items-center ">
          <div className="lg:w-full lg:h-full bg-orange rounded-lg flex items-center justify-center rotate-[10deg]">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl font-iceberg bg-gray p-1 md:p-2 rounded-lg h-full rotate-[-10deg]"
            >
              <img
                src={img}
                alt=""
                className="w-90 h-60 md:w-150 md:h-100 lg:w-full lg:h-full object-cover rounded-lg "
              />
            </a>
          </div>
          <div className="w-full h-full"></div>
        </div>
      </div>
      <button className="absolute bottom-20 right-12  md:bottom-12 md:right-[16%] lg:bottom-16 lg:right-[17%] xl:right-[20%] bg-gray text-black font-iceberg px-6  md:px-10 lg:px-16  py-2.5  text-[12px]  md:text-lg rounded-full shadow-md flex items-center justify-center transition duration-200 hover:brightness-105 active:scale-95 z-10">
        Download CV
      </button>
    </section>
  );
}

export default Resume;
