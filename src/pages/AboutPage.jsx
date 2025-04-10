import React from 'react';
import myPicture from '../assets/images/my picture.jpg';
import resumePDF from '../assets/images/My Professional Resume.pdf';

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
                  <li>Implement machine learning algorithms in decision making</li>
                  <li>Data Analysis and Visualization</li>
                  <li>Create responsive and intuitive user interfaces</li>
                  <li>Build and optimize RESTful APIs with FastAPI</li>
                  <li>Mobile App Development</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">Education & Certifications</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-blue-500">Bachelor's in Software Engineering</h3>
                    <p className="text-gray-400">African Leadership University • 2022 - 2025</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-blue-500">Relevant Certifications</h3>
                    <ul className="list-disc pl-6 text-gray-300">
                      <li>Flutter Mobile Development</li>
                      <li>Machine Learning Specialization</li>
                      <li>Full Stack Web Development</li>
                      <li>Kaggle 2025</li>
                      <li>ALX Virtual Assistant</li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href={resumePDF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View My Resume
                    </a>
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