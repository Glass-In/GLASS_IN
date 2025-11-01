import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, X } from "lucide-react";

const services = [
  {
    name: "Glass Designs",
    desc: "We create artistic and durable glass designs to enhance homes, offices, and commercial interiors with a blend of style and strength.",
    image: "/projects/photo-1636125657985-7384a5478f5a.avif",
    details:
      "Our custom glass designs are made using precision technology and high-quality materials to ensure clarity, strength, and long-lasting shine. Whether you need etched, frosted, or patterned glass, we bring your imagination to life.",
  },
  {
    name: "LED Mirrors",
    desc: "Elegant LED mirrors for bathrooms, bedrooms, and commercial spaces.",
    image: "/projects/premium_photo-1676823570845-d2dd715c9967.avif",
    details:
      "Our LED mirrors come with touch controls, anti-fog technology, and adjustable lighting — perfect for modern interiors that demand both beauty and function.",
  },
  {
    name: "Glass Partitions",
    desc: "Stylish glass partitions that add light and openness to your spaces.",
    image: "/projects/premium_photo-1661895061354-bea49f08792f.avif",
    details:
      "Glass partitions provide a modern aesthetic while maintaining privacy and acoustic balance. We offer both framed and frameless styles for residential and corporate spaces.",
  },
  {
    name: "Custom Glass Tables",
    desc: "Premium custom glass tables designed for elegance and durability.",
    image: "/projects/photo-1750045662231-130825e22fff.avif",
    details:
      "Each table is handcrafted with precision, offering a perfect balance of beauty and function. Choose from a wide range of glass types, colors, and base materials.",
  },
  {
    name: "Glass Doors & Windows",
    desc: "High-quality glass doors and windows for every environment.",
    image: "/projects/photo-1517324242524-cd87de1df865.avif",
    details:
      "From sliding doors to double-glazed windows, our glass installations are energy-efficient, durable, and visually striking.",
  },
  {
    name: "Decorative Panels",
    desc: "Custom decorative glass panels that redefine modern interior art.",
    image: "/projects/photo-1576698483491-8c43f0862543.avif",
    details:
      "Transform your space with laser-cut, painted, or textured decorative panels, built to create a luxurious and artistic ambiance.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-sky-950 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Floating Background Glow */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-sky-400/30 blur-3xl rounded-full"
        animate={{ x: [0, 80, 0], y: [0, 60, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/30 blur-3xl rounded-full"
        animate={{ x: [0, -100, 0], y: [0, -50, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
          Our <span className="text-sky-400">Services</span>
        </h2>
        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Explore our range of premium glass solutions, designed with precision and passion for modern living and working spaces.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="relative z-10 container mx-auto mt-16 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 text-center group hover:shadow-sky-500/50 transition-all cursor-pointer"
          >
            <motion.div
              className="flex justify-center mb-5"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-sky-400 to-cyan-500 shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            <h3 className="text-2xl font-semibold text-sky-300 mb-3">{service.name}</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">{service.desc}</p>

            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(56,189,248,0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedService(service)}
              className="px-5 py-2 bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-medium rounded-full flex items-center justify-center gap-2 mx-auto transition-all hover:from-cyan-400 hover:to-sky-500"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-sky-950 to-indigo-900 rounded-3xl shadow-2xl max-w-3xl w-full mx-4 p-8 relative"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-3xl font-bold text-sky-300 mb-3">
                {selectedService.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {selectedService.details}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
