import React from "react";
import { FaGithub, FaLinkedin, FaPaw, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white bg-teal-500 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        {/* Logo and Brand Name */}
        <a
          className="flex title-font font-medium items-center md:justify-start justify-center text-white hover:text-gray-200 transition"
          href="/"
        >
          <FaPaw className="text-2xl" />
          <span className="ml-3 text-xl font-semibold">The Pawfect Store</span>
        </a>

        {/* Copyright and Email */}
        <p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-teal-300 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} The Pawfect Store —{" "}
          <a
            href="mailto:mubashirmpa2008@gmail.com"
            className="text-white underline hover:text-gray-300 transition"
            rel="noopener noreferrer"
          >
            mubashirmpa2008@gmail.com
          </a>
        </p>

        {/* Social Links */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.linkedin.com/in/mubashir-khan-538a662bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition mx-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/MubashirKhanYousufZai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition mx-2"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://wa.me/qr/FWX3BWWPABVRG1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition mx-2"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
