import { useState } from 'react';
import { Link } from 'react-router-dom';
import TechBadge from './TechBadge';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const { id, title, description, image, technologies, demoUrl, codeUrl } = project;
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image || "/api/placeholder/400/200"} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="p-4 flex space-x-3">
            {demoUrl && (
              <a 
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm font-medium transition-colors"
              >
                Live Demo
              </a>
            )}
            {codeUrl && (
              <a 
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded text-sm font-medium transition-colors"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <Link to={`/projects/${id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">{title}</h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;