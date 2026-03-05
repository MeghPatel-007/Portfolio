import React, { useState } from "react";
import profile from "../../assets/images/profile.png";
import { motion } from "framer-motion";

function NavBar({ startAnimation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="font-iceberg fixed top-0 left-0 w-screen z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={startAnimation ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-3">
          <img src={profile} className="h-12" alt="MeghPatel Logo" />
          <span className="text-2xl text-white">Megh Patel</span>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center p-2 w-12 h-12 justify-center md:hidden rounded-lg text-white hover:bg-orange transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path
              fill="currentColor"
              d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
            />
          </svg>
        </button>

        {/* Desktop Menu (NO animation) */}
        <div className="hidden md:block md:w-auto">
          <ul className="flex md:flex-row md:space-x-8 text-base">
            <li>
              <a
                href="#About"
                className="block py-2 text-white hover:text-orange"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className="block py-2 text-white hover:text-orange"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Resume"
                className="block py-2 text-white hover:text-orange"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="block py-2 text-white hover:text-orange"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu (animated) */}
        {menuOpen && (
          <motion.div
            className="w-full md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="flex flex-col mt-4 text-base bg-zinc-900 rounded-lg p-4">
              <li>
                <a
                  href="#About"
                  className="block py-2 text-white hover:text-orange"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="block py-2 text-white hover:text-orange"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Resume"
                  className="block py-2 text-white hover:text-orange"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="block py-2 text-white hover:text-orange"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default NavBar;
