import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen">
      {/* Animated Header */}
      <Header />

      {/* Intro Section */}
      <motion.section
        className="container mx-auto my-16 p-6 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title with gradient glow */}
        <motion.h3
          className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-sky-400 via-blue-400 to-sky-300 text-transparent bg-clip-text"
          initial={{ backgroundPosition: "200% center" }}
          animate={{ backgroundPosition: ["200% center", "-200% center"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          Our Premium Glass Services
        </motion.h3>

        {/* Description text with soft fade */}
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          At <span className="text-sky-400 font-semibold">GLASS IN</span>, we provide high-end
          glass products including designer mirrors, LED mirrors, glass partitions,
          sliding doors, and custom installations. Whether for your home or office,
          our craftsmanship and precision bring modern elegance to every space.
        </motion.p>

        {/* Animated Divider */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto my-8 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 1.2 }}
        ></motion.div>

        {/* Service Highlights */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            { title: "Custom Glass Designs", desc: "Tailored solutions that match your interior aesthetics." },
            { title: "LED Mirror Crafting", desc: "Modern illumination with smart LED mirror designs." },
            { title: "Glass Partitions", desc: "Elegant glass divisions for home and office spaces." },
            { title: "Sliding Glass Doors", desc: "Space-saving, sleek glass doors for a luxurious finish." },
            { title: "Bathroom Mirrors", desc: "High-quality, fog-free mirrors designed to last." },
            { title: "Glass Tables & Panels", desc: "Minimalist and modern glass furniture craftsmanship." },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/40 backdrop-blur-md border border-gray-700 hover:border-sky-500 rounded-2xl p-6 shadow-lg hover:shadow-sky-500/20 transition-all duration-500"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h4 className="text-xl font-bold text-sky-400 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;

