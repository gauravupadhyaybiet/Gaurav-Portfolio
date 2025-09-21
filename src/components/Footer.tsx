import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <span className="text-3xl font-bold">
              Gaurav<span className="text-primary">Portfolio</span>
            </span>
            <p className="mt-2 text-gray-300 text-sm">
              Software Engineer specializing in building exceptional digital experiences.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/gauravupadhyaybiet"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gaurav-upadhyay-558059266/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
           
            <motion.a
              href="https://mail.google.com/mail/u/0/#inbox"
              whileHover={{ scale: 1.2 }}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          &copy; {currentYear} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

