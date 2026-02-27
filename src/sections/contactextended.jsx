import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contactextended() {
  return (
    <section id="Contact" className="bg-gray  relative w-full">
      <div className="flex flex-col items-center pr-14 md:pr-18 lg:pr-27 xl:pr-45 2xl:pr-50">
        <div className="text-5xl font-semi-bold text-white font-iceberg select-none md:text-7xl lg:text-[7rem] xl:text-[10rem] z-2 py-4">
          <span className="text-semi-black">Contact</span> me
        </div>
      </div>
      <div className="h-full">
        <div className="h-full w-full flex items-center justify-center px-6  md:py-5 ">
          <form className="w-full max-w-2xl bg-zinc-900 rounded-2xl p-8 md:p-12 space-y-6 shadow-xl font-ADLaM-Display">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="bg-transparent border-b border-zinc-600 text-white placeholder-zinc-400 py-3 focus:outline-none focus:border-orange transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="bg-transparent border-b border-zinc-600 text-white placeholder-zinc-400 py-3 focus:outline-none focus:border-orange transition"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border-b border-zinc-600 text-white placeholder-zinc-400 py-3 focus:outline-none focus:border-orange transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              required
              className="w-full bg-transparent border border-zinc-700 rounded-lg text-white placeholder-zinc-400 p-4 focus:outline-none focus:border-orange transition resize-none"
            />

            <button
              type="submit"
              className="w-full bg-orange text-black font-iceberg text-lg py-3 rounded-full transition duration-200 hover:brightness-110 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 py-5">
        <a
          href="https://www.linkedin.com/in/meghpatel007/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-zinc-600 flex items-center justify-center text-orange transition hover:bg-orange hover:text-black"
        >
          <FaLinkedinIn size={20} />
        </a>

        <a
          href="https://github.com/MeghPatel-007"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-zinc-600 flex items-center justify-center text-orange transition hover:bg-orange hover:text-black"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="mailto:meghpatel0009@gmail.com"
          className="w-12 h-12 rounded-full border border-zinc-600 flex items-center justify-center text-orange transition hover:bg-orange hover:text-black"
        >
          <MdEmail size={22} />
        </a>
      </div>
    </section>
  );
}

export default Contactextended;
