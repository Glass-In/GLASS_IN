import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // for hamburger icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-sky-600 via-blue-500 to-indigo-500 shadow-lg backdrop-blur-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Animated Logo */}
        <motion.h1
          className="text-3xl font-extrabold cursor-pointer select-none"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            GLASS
          </span>
          <span className="text-sky-300 drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]">
            IN
          </span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium text-white">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <Link
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "")}`
                }
                className="transition duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              onClick={toggleMenu}
              className="text-white text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90"
            />
          ) : (
            <Menu
              onClick={toggleMenu}
              className="text-white text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white/10 backdrop-blur-md text-white text-center space-y-4 py-6 shadow-inner"
        >
          {["Home", "About", "Services", "Contact "].map((item, index) => (
            <Link
              key={index}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "")}`
              }
              className="block text-lg font-medium hover:text-sky-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
