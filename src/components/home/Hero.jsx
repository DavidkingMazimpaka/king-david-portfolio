import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Full Stack Developer",
    "Software Engineer",
    "MLOps Engineer",
    "Data Analyst"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-gray-400 font-mono mb-4">Welcome to my portfolio</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-display">
              King David
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="text-2xl md:text-3xl text-gray-300 font-light h-12 mb-6">
              I'm a{' '}
              <span className="text-blue-500 font-medium">
                {texts[currentTextIndex]}
              </span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Specializing in full-stack development, AI and machine learning solutions. 
              I create innovative applications that combine modern web technologies 
              with intelligent systems to solve complex business challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/projects">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
                  View Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-500 px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
                  Contact Me
                </Button>
              </Link>
            </div>

            <div className="flex gap-6 mt-8">
              <a href="https://github.com/DavidkingMazimpaka" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 transition-colors">
                <Github size={24} />
              </a>
              <a href="www.linkedin.com/in/king-david-mazimpaka-583182319" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/luca_ma_gee?s=21" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;