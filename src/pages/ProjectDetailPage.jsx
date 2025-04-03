import React from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import TechBadge from '../components/projects/TechBadge';

const ProjectDetailPage = () => {
  const { id } = useParams();
  
  // This would typically come from an API or data store
  const project = {
    id: parseInt(id),
    title: "Project Title",
    description: "Detailed project description goes here. This is a comprehensive overview of the project, its goals, and achievements.",
    image: "/path-to-image.jpg",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
    features: [
      "Feature 1 description",
      "Feature 2 description",
      "Feature 3 description"
    ],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://project-demo.com"
  };

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
              {project.title}
            </h1>
            
            <div className="mb-8">
              <div className="w-full h-[400px] rounded-xl overflow-hidden mb-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">Project Overview</h2>
                <p className="text-gray-300 text-lg">
                  {project.description}
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} technology={tech} />
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">Key Features</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 text-center border border-gray-700"
                >
                  View on GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 text-center"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage; 