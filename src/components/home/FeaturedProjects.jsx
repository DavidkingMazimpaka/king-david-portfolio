import React from 'react';
import { Link } from 'react-router-dom';
import ChatBotImage from '../../assets/images/ChatBot.jpeg';
import NutriGuardImage from '../../assets/images/welcomePage.png';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "NutriGuard AI",
      description: "An innovative AI-powered system for early malnutrition detection in children under 5 years old. Utilizing advanced machine learning algorithms to analyze growth patterns and nutritional indicators.",
      image: NutriGuardImage,
      technologies: [
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "TensorFlow",
        "Keras"
      ],
      demoUrl: "https://www.canva.com/design/DAGjAhByJaE/7vwUsGi-1EjGUoUn7dZv_g/view?utm_content=DAGjAhByJaE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h43e68a2875#12",
      codeUrl: "https://github.com/DavidkingMazimpaka/NutriGuard_Mission_Capstone"
    },
    {
      id: 2,
      title: "Heart Disease Chatbot",
      description: "A healthcare chatbot specialized in heart disease information using BERT transformer model to provide accurate and helpful responses to user queries about cardiovascular health.",
      image: ChatBotImage,
      technologies: [
        "Python",
        "BERT",
        "Google Colab",
        "Streamlit"
      ],
      demoUrl: "https://drive.google.com/file/d/1k4fiTbrTkWXwboZI57JF_wZ_SKMmn3PZ/view",
      codeUrl: "https://github.com/DavidkingMazimpaka/CHAT-BOT"
    },
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-8">
                <Link to={`/projects/${project.id}`}>
                  <h3 className="text-2xl font-semibold mb-3 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gray-700 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 