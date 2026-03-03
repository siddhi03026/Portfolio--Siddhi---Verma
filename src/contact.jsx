import React from "react";
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 text-white text-center">
      <h2 className="text-4xl font-bold mb-14">
        Contact <span className="text-pink-500">Me</span>
        <div className="w-16 h-1 bg-pink-500 mx-auto mt-3 rounded-full"></div>
      </h2>

      <div className="max-w-xl mx-auto p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20">
        
        <a
          href="https://www.linkedin.com/in/siddhiv3rma"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-pink-500 hover:bg-pink-600 transition duration-300 rounded-full font-semibold shadow-lg"
        >
          <FaLinkedin />
          Visit My LinkedIn
        </a>
        <p className="flex items-center justify-center gap-3 mt-6">
          <FaMapMarkerAlt className="text-pink-500" />
          India
        </p>
      </div>
    </section>
  );
};

export default Contact;