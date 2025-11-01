import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const phoneNumber = "919566094609"; // Replace with your WhatsApp number
    const { name, email, message } = formData;

    const text = `Hello! 👋\n\nYou have a new message from *${name}*.\n\n📧 Email: ${email}\n💬 Message: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-16">
      {/* Header */}
      <motion.h2
        className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-sky-400 via-blue-400 to-sky-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>

      {/* Contact Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 w-full max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side — Contact Info */}
        <div className="bg-gray-800/50 border border-gray-700 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-sky-500/20 transition-all duration-500">
          <h3 className="text-3xl font-semibold mb-6 text-sky-400">
            Contact Information
          </h3>

          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-sky-400 text-2xl" />
              <span className="text-gray-300">glassin1992@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-sky-400 text-2xl" />
              <span className="text-gray-300">+91 9566094609</span>
            </div>

            {/* Location with clickable map link */}
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-sky-400 text-2xl" />
              <a
                href="https://www.google.com/maps?q=GLASS IN 108,+GNT+Road,+Sakthivel+Nagar,+Tamil+Nadu+600066"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sky-400 transition-colors duration-300"
              >
                NO 108, GNT Road, Sakthivel Nagar,Puzhal,Lyon Tamil Nadu 600066
              </a>
            </div>
          </div>

          {/* Decorative Line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1 }}
          />

          {/* 🗺️ Animated + Dark Google Map */}
          <motion.div
            className="mt-8 rounded-2xl overflow-hidden border border-gray-700 shadow-lg"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.853999712313!2d80.2449!3d13.1409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263f2482f4f01%3A0x6e4d3b11a186e5ea!2s108%2C%20GNT%20Road%2C%20Sakthivel%20Nagar%2C%20Tamil%20Nadu%20600066!5e0!3m2!1sen!2sin!4v1698418880000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) contrast(95%) brightness(90%)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        {/* Right Side — Contact Form */}
        <motion.form
          className="bg-gray-800/50 border border-gray-700 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-sky-500/20 transition-all duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          onSubmit={sendToWhatsApp}
        >
          <h3 className="text-3xl font-semibold mb-6 text-sky-400">
            Send Us a Message
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:outline-none focus:border-sky-400 transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:outline-none focus:border-sky-400 transition-all duration-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:outline-none focus:border-sky-400 transition-all duration-300"
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px #38bdf8",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-full font-semibold text-lg transition-all duration-500"
            >
              <FaWhatsapp className="text-2xl" />
              Send via WhatsApp
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
