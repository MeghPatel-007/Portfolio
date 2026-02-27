import React from "react";
import profile from "../../assets/images/profile.png";

function NavBar() {
  return (
    <>
      <nav className="font-iceberg fixed top-0 left-0 w-full z-50">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={profile} className="h-12" alt="MeghPatel Logo" />
            <span className="self-center text-2xl whitespace-nowrap text-white">
              Megh Patel
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-orange focus:outline-none focus:ring-2 focus:ring-orange dark:text-gray-400 dark:hover:bg-orange dark:focus:ring-orange"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                fill="#333333"
                d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent text-base">
              <li>
                <a
                  href="#About"
                  className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Resume"
                  className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange"
                >
                  Contact
                </a>
              </li>
              <label className="inline-flex items-center cursor-pointer select-none">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange dark:peer-focus:ring-orange rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange dark:peer-checked:bg-orange"></div>
              </label>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
