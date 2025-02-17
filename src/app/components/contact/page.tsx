"use client"
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null); // status is either a string or null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (res.status === 200) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } else {
      setStatus(result.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 via-white to-teal-100 flex flex-col items-center justify-center px-6 sm:px-12 py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-6">
        Get in Touch 🚚
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Have a question or want to say hello? Fill out the form below or reach out through our contact details!
      </p>

      {/* Contact Info */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl">
          <FaPhone className="text-3xl text-teal-500" />
          <h3 className="text-lg font-semibold mt-2">Phone</h3>
          <p className="text-gray-600">+92 315 266 9152</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl">
          <FaEnvelope className="text-3xl text-teal-500" />
          <h3 className="text-lg font-semibold mt-2">Email</h3>
          <p className="text-gray-600">munashirmpa2008@gmail.com</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl">
          <FaMapMarkerAlt className="text-3xl text-teal-500" />
          <h3 className="text-lg font-semibold mt-2">Location</h3>
          <p className="text-gray-600">Karachi, Pakistan</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="mt-12 bg-white shadow-lg p-8 rounded-xl w-full max-w-3xl" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-teal-400 text-teal-700 outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-teal-400 text-teal-700 outline-none"
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-teal-400 text-teal-700 outline-none w-full mt-4"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-teal-500 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-lg text-teal-500">{status}</p>}

      {/* Social Links */}
      <div className="mt-8 flex space-x-6">
        <a href="https://www.linkedin.com/in/mubashir-khan-538a662bb/" className="text-teal-500 text-2xl hover:text-teal-700 transition"><FiLinkedin /></a>
        <a href="https://github.com/MubashirKhanYousufZai" className="text-teal-500 text-2xl hover:text-teal-700 transition"><FiGithub /></a>
        <a href="https://wa.me/qr/FWX3BWWPABVRG1" className="text-teal-500 text-2xl hover:text-teal-700 transition"><FaWhatsapp /></a>
      </div>
    </div>
  );
};

export default Contact;
