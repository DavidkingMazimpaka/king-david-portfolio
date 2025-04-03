import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-display">
              About Me
            </h1>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                I am a passionate Full Stack Engineer and Machine Learning enthusiast with a 
                deep commitment to creating innovative solutions. My journey in software 
                development has equipped me with strong problem-solving skills and a 
                comprehensive understanding of modern technologies.
              </p>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">My Journey</h2>
                <p className="text-gray-300">
                  With experience in both frontend and backend development, I specialize in 
                  building scalable applications that leverage the power of machine learning. 
                  I'm constantly exploring new technologies and methodologies to create more 
                  efficient and intelligent solutions.
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">What I Do</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Develop full-stack web applications</li>
                  <li>Implement machine learning solutions</li>
                  <li>Design scalable system architectures</li>
                  <li>Create responsive and intuitive user interfaces</li>
                  <li>Build and optimize RESTful APIs</li>
                  <li>Practice agile development methodologies</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">Education & Certifications</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-blue-500">Bachelor's in Computer Science</h3>
                    <p className="text-gray-400">University Name • 2019 - 2023</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-blue-500">Relevant Certifications</h3>
                    <ul className="list-disc pl-6 text-gray-300">
                      <li>AWS Certified Developer</li>
                      <li>Machine Learning Specialization</li>
                      <li>Full Stack Web Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage; 