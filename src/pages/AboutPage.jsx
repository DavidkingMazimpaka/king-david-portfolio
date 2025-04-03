import React from 'react';
import myPicture from '../assets/images/my picture.jpg';

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-display">
              About Me 
            </h1>
            
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="relative w-80 h-80 md:w-96 md:h-96 mb-6 md:mb-0 md:mr-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                <div className="absolute inset-1 bg-[#0a0a0a] rounded-full"></div>
                <img
                  src={myPicture}
                  alt="King David"
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover border-4 border-[#0a0a0a] bg-[#0a0a0a]"
                />
              </div>
              <p className="text-lg text-gray-300 md:max-w-xl">
                I am a passionate Full Stack Engineer and Machine Learning enthusiast with a 
                deep passionate to create innovative, modern and scalable solutions. My journey in software 
                development has equipped me with strong problem-solving skills and a 
                comprehensive understanding of modern technologies.
              </p>
            </div>

            <div className="space-y-6 text-gray-300">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage; 