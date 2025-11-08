

"use client";

import { motion } from "framer-motion";
// Link from "next/link";
function AboutHero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center mt-20 min-h-[calc(100vh-80px)] w-full bg-gradient-to-br from-blue-50 via-blue-200 to-blue-300 px-6 md:px-12 py-10 text-center md:text-left overflow-hidden">
      {/* خلفية شبكية خفيفة */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.05)_75%)] bg-[length:50px_50px]"></div>

      {/* النص */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-5 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
          About <span className="text-blue-400">Next Store</span>
        </h1>
        <p className="text-lg text-gray-700 font-semibold leading-7 max-w-xl mx-auto md:mx-0 mb-10">
          At Next Store, we believe that shopping should be smart, simple, and
          enjoyable. Our mission is to connect people with quality products
          through a fast, secure, and modern experience built with the latest
          web technologies.
        </p>

        <motion.a
        href="/"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="border-2 text-white text-lg border-white outline-2 outline-blue-400 block md:inline mx-auto md:mx-[0_15px] w-full md:w-fit bg-blue-400 hover:bg-blue-500 px-6 py-3 rounded-xl font-medium shadow-md transition-all duration-200"
        >
          Start Shopping
        </motion.a>
                <motion.a
        href="/contact"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="  border-2 text-lg border-white outline-2 outline-blue-400 block md:inline mx-auto md:mx-[0_0] w-full md:w-fit bg-blue-400  hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium shadow-md transition-all duration-200"
        >
          Contact Us
        </motion.a>
      </motion.div>

      {/* الصورة */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="flex-1 flex justify-center mt-10 md:mt-0 relative z-10"
      >
        <motion.img
          // src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          src="/about-us.jpg"
          alt="About illustration"
          width={350}
          height={350}
          className="drop-shadow-lg"
          whileHover={{ rotate: 2, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </section>
  );
}

export default AboutHero;