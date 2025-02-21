import React from "react";
import { FaGithub, FaLinkedin, FaPaw, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-500 text-white py-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12">
        
        {/* Brand Logo & Name */}
        <a
          href="/"
          className="flex items-center gap-2 text-white hover:text-gray-200 transition duration-300"
        >
          <FaPaw className="text-3xl" />
          <span className="text-lg font-semibold tracking-wide">
            The Pawfect Store
          </span>
        </a>

        {/* Copyright & Contact */}
        <p className="text-sm text-gray-200 text-center sm:text-left mt-4 sm:mt-0">
          © {new Date().getFullYear()} The Pawfect Store —{" "}
          <a
            href="mailto:mubashirmpa2008@gmail.com"
            className="underline hover:text-gray-300 transition duration-300"
          >
            mubashirmpa2008@gmail.com
          </a>
        </p>

        {/* Social Links */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/mubashir-khan-538a662bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/MubashirKhanYousufZai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://wa.me/qr/FWX3BWWPABVRG1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
