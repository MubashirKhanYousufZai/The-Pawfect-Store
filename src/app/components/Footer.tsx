"use client"
import React from "react";
import { FaGithub, FaLinkedin, FaPaw, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-teal-500 text-white py-8"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 gap-6">
        
        {/* Brand Logo & Name */}
        <a
          href="/"
          className="flex items-center gap-3 text-white hover:text-gray-200 transition duration-300"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaPaw className="text-4xl" />
          </motion.div>
          <span className="text-xl font-semibold tracking-wide">
            The Pawfect Store
          </span>
        </a>

        {/* Copyright & Contact */}
        <p className="text-sm text-gray-200 text-center sm:text-left">
          © {new Date().getFullYear()} The Pawfect Store —{" "}
          <a
            href="mailto:mubashirmpa2008@gmail.com"
            className="underline hover:text-gray-300 transition duration-300"
          >
            mubashirmpa2008@gmail.com
          </a>
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mubashir-khan-538a662bb/" },
            { icon: <FaGithub />, link: "https://github.com/MubashirKhanYousufZai" },
            { icon: <FaWhatsapp />, link: "https://wa.me/qr/FWX3BWWPABVRG1" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.3 }}
              className="text-white hover:text-gray-300 transition duration-300"
              aria-label="Social Link"
            >
              <span className="text-3xl">{item.icon}</span>
            </motion.a>
          ))}
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;
