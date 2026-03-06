import React from "react";
import sword from "/images/sword.png";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <section
        className="bg-zinc-900 pl-5
       xl:pl-35 lg:pl-25 md:pl-17
       py-20 relative"
      >
        <div className="flex flex-col items-center">
          <motion.img
            src={sword}
            alt=""
            className="z-10 rotate-80 top-30 md:h-18 md:top-40 lg:h-20 absolute lg:top-60 xl:h-30 "
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
          <motion.div
            className="text-5xl font-semi-bold text-white font-ADLaM-Display select-none md:text-7xl lg:text-[7rem] xl:text-[10rem] z-2 flex gap-15 lg:gap-20 xl:gap-30"
            intial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Let's
            <span className="text-semi-black">
              <p>Build</p>
            </span>
          </motion.div>
          <motion.div
            className="text-5xl font-semi-bold text-white font-ADLaM-Display select-none md:text-7xl lg:text-[7rem]  xl:text-[10rem] z-2 flex gap-9 lg:gap-10 xl:gap-15"
            intial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Some
            <span className="text-semi-black">
              <p>thing</p>
            </span>
          </motion.div>
          <motion.div
            className="text-5xl font-semi-bold text-white font-ADLaM-Display select-none md:text-7xl lg:text-[7rem] xl:text-[10rem] z-2 flex gap-6 xl:gap-10"
            intial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Toge
            <span className="text-semi-black">
              <p>ther</p>
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;
