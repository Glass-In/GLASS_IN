import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const projects = [
  { id: 1, name: "Glass Partition", image: "/projects/photo-1636125657985-7384a5478f5a.avif" },
  { id: 2, name: "Glass Table", image: "/projects/photo-1750045662231-130825e22fff.avif" },
  { id: 3, name: "LED Mirror", image: "/projects/premium_photo-1676823570845-d2dd715c9967.avif" },
  { id: 4, name: "Sliding Glass Door", image: "/projects/premium_photo-1661895061354-bea49f08792f.avif" },
  { id: 5, name: "Bathroom Mirror", image: "/projects/photo-1576698483491-8c43f0862543.avif" },
  { id: 6, name: "Custom Glass Panel", image: "/projects/photo-1517324242524-cd87de1df865.avif" },
  { id: 7, name: "Bathroom", image: "/projects/ChatGPT Image Oct 1, 2025, 11_42_00 AM.png" },
  { id: 8, name: "Stairs", image: "/projects/ChatGPT Image Oct 1, 2025, 11_53_51 AM.png" },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-sky-950 via-blue-900 to-indigo-950 text-white overflow-hidden">
      {/* Floating Light Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-sky-400/20 blur-3xl rounded-full"
        animate={{ x: [0, 100, 0], y: [0, 80, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full"
        animate={{ x: [0, -120, 0], y: [0, -60, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 tracking-wide drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
      >
        Our <span className="text-sky-400">Projects</span>
      </motion.h2>

      {/* Project Grid */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.08 }}
            className="relative overflow-hidden rounded-3xl shadow-xl border border-white/20 backdrop-blur-md group cursor-pointer bg-white/10 hover:bg-white/20 transition-all duration-500"
            onClick={() => setSelectedImage(project.image)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end items-center p-6">
              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-2xl font-semibold tracking-wide"
              >
                {project.name}
              </motion.h3>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 0.6 }}
                className="mt-2 h-[2px] bg-sky-400 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox with Zoom + Pan */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50"
        >
          <TransformWrapper
            initialScale={1}
            minScale={0.8}
            maxScale={4}
            centerOnInit
            wheel={{ step: 0.1 }}
            doubleClick={{ mode: "zoomIn" }}
          >
            <TransformComponent>
              <img
                src={selectedImage}
                alt="Preview"
                className="rounded-2xl shadow-2xl max-h-[85vh] max-w-[90vw] object-contain border border-sky-400/30"
              />
            </TransformComponent>
          </TransformWrapper>

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white bg-sky-600/40 hover:bg-sky-500/70 p-3 rounded-full transition duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
