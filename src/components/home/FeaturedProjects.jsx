import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "NutriGuard AI",
      description: "AI-Powered EarlyMalnutrition Detection in Children under 5 years old",
      image: "/path-to-image.jpg",
      technologies: ["Typescript", "FastAPI", "PostgreSQL"," TensorFlow", "Keras"],
    },
    {
      id: 2,
      title: "Project Two",
      description: "Another amazing project showcasing different skills.",
      image: "/path-to-image.jpg",
      technologies: ["TypeScript", "Express", "PostgreSQL"],
    },
    // Add more featured projects as needed
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                to={`/projects/${project.id}`}
                className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects; 