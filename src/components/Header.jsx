import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center text-center py-28 overflow-hidden
                 bg-gradient-to-r from-blue-900 via-sky-700 to-indigo-800 text-white shadow-xl"
    >
      {/* Soft Glow Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      {/* Animated Floating Lights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3], y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/4 w-24 h-24 bg-sky-400/30 blur-3xl rounded-full"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.7, 0.3], y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/4 w-28 h-28 bg-indigo-400/30 blur-3xl rounded-full"
      ></motion.div>

      {/* Text Section */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
        >
          Welcome to{" "}
          <span className="text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]">
            GLASS IN
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed"
        >
          Premium glass solutions for modern living and office spaces — where
          design meets durability.
        </motion.p>

        {/* Call to Action Button */}
        <motion.a
          href="#services"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(56,189,248,0.8)",
          }}
          className="inline-block mt-10 px-8 py-3 rounded-full bg-white text-sky-700 font-semibold text-lg shadow-lg transition-transform duration-300 hover:bg-sky-100"
        >
          Explore Our Work
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
