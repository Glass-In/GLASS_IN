import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  // Replace with your exact location link or coordinates
  const mapLink =
    "https://www.google.com/maps?q=GLASS+IN,+108,+GNT+Road,+Sakthivel+Nagar,+Tamil+Nadu+600066";

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-14">
      {/* Decorative Wave Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 92.83C906.67 72 823.78 31 743.84 26.14c-80.78-4.93-160.17 27.85-240.86 39.2C422.21 76.6 340.9 68.94 261.14 52.57 182.39 36.53 94.46 11.86 0 0v120h1200V97.71c-71.48 13.77-143.63 21.13-214.34-4.88z"
            fill="#0ea5e9"
            fillOpacity="0.2"
          ></path>
        </svg>
      </div>

      {/* Animated glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent)] animate-pulse"></div>

      <motion.div
        className="container mx-auto text-center relative z-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.h2
          className="text-4xl font-extrabold mb-4 tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-white">GLASS</span>{" "}
          <span className="text-sky-400">IN</span>
        </motion.h2>

        {/* Tagline */}
        <p className="text-gray-300 mb-6 italic text-lg">
          Redefining spaces with elegance, clarity, and design.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-6 mt-4">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/glassin14/" },
            { icon: <FaWhatsapp />, link: "https://hosturl.site/JGh3Gj" },
            { icon: <FaPhoneAlt />, link: "tel:+919566094609" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-white text-3xl transition-all duration-300"
              whileHover={{ scale: 1.3, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gray-700 my-6 mx-auto w-3/4"></div>

        {/* Address & Map Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400">
            <FaMapMarkerAlt className="text-sky-400 text-lg" />
            <a
              href="https://www.google.com/maps?q=GLASS IN 108,+GNT+Road,+Sakthivel+Nagar,+Tamil+Nadu+600066"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 font-medium transition-colors"
              title="Open in Google Maps"
            >
              GLASS IN, 108, GNT Road, Sakthivel Nagar, Tamil Nadu 600066
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-sky-400 font-semibold">GLASS IN</span>. All
            rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
