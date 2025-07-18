import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { slideIn } from "../utils/motion";

const Footer = () => {
  return (
    <motion.footer

      className="w-full bg-black-100 text-white py-6 mt-10 px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fathimath-zahida-98695a254"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-2xl hover:scale-125 transition-transform duration-200"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Zahida21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 text-2xl hover:scale-125 transition-transform duration-200"
          >
            <FaGithub />
          </a>

          {/* Email */}
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-slate-200 text-2xl hover:scale-125 transition-transform duration-200 cursor-pointer " />
            <a
              
              className="text-sm text-slate-200 cursor-pointer "
            >
              zahidazfathima@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 text-center mt-4">
          &copy; {new Date().getFullYear()} Zahida. Made with ♥ by Zahida
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
