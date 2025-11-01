import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        className="max-w-3xl text-center bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-3xl p-10 shadow-2xl hover:shadow-sky-500/30 transition-all duration-500"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-sky-400 via-blue-400 to-sky-300 text-transparent bg-clip-text"
          initial={{ backgroundPosition: "200% center" }}
          animate={{ backgroundPosition: ["200% center", "-200% center"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          About GLASS IN
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span className="text-sky-400 font-semibold">GLASS IN</span> is a
          leading innovator in premium glass solutions for both residential and
          commercial spaces. We specialize in high-quality products such as LED
          mirrors, glass partitions, custom tables, and elegant sliding glass
          doors.
        </motion.p>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Our mission is to bring sophistication and clarity to every corner of
          your space through modern craftsmanship and innovative design. With a
          team of skilled experts, we focus on delivering quality, precision,
          and timeless beauty in every project.
        </motion.p>

        {/* Animated Divider */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto my-8 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Highlight Line */}
        <motion.h4
          className="text-xl text-sky-300 italic font-light tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          “Shaping reflections, defining elegance.”
        </motion.h4>
      </motion.div>
    </div>
  );
};

export default About;
