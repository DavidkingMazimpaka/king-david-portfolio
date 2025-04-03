import React from 'react';

const ProjectFilter = ({ technologies, selectedTech, onFilterChange }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Filter by Technology</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onFilterChange(null)}
          className={`px-4 py-2 rounded-full ${
            selectedTech === null
              ? 'bg-primary text-white'
              : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          All
        </button>
        {technologies.map((tech) => (
          <button
            key={tech}
            onClick={() => onFilterChange(tech)}
            className={`px-4 py-2 rounded-full ${
              selectedTech === tech
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter; 