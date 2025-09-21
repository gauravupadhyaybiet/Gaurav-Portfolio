import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const interestingFacts = [
    "Software Engineers solve real-world problems with code.",
    "Clean code improves both performance and collaboration.",
    "Automation and debugging save hundreds of hours yearly.",
    "Continuous learning is key in tech due to rapid evolution.",
    "Full-stack developers bridge frontend and backend seamlessly."
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-4 text-gray-900">

      {/* Floating Animated Blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-300/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary mb-4 animate-pulse"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full-Stack Developer
          </motion.span>

          <motion.h1
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-primary">Hello, I'm</span>
            <br />
            Gaurav Upadhayay
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-gray-700 max-w-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build elegant, scalable, and high-performance web applications. I love solving complex problems, optimizing code, and turning ideas into seamless user experiences. I thrive in both frontend and backend development and enjoy exploring modern technologies to create impactful solutions.
          </motion.p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="flex-1 max-w-md"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative">
            {/* Dark RGB Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-800 via-pink-800 to-indigo-800 rounded-xl blur-3xl opacity-50 animate-gradient-xy"></div>

            <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <motion.div
                className="p-6 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Interesting Facts About Software Engineers</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  {interestingFacts.map((fact, index) => (
                    <motion.li
                      key={index}
                      className="hover:text-primary transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.2 }}
                    >
                      {fact}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0%,100% { transform: translate(0px,0px) scale(1); }
          33% { transform: translate(30px,-20px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        @keyframes gradient-xy { 0%,100% { background-position:0% 50%; } 50% { background-position:100% 50%; } }
        .animate-gradient-xy { background-size:400% 400%; animation: gradient-xy 12s ease infinite; }
      `}</style>
    </section>
  );
};

export default Hero;



