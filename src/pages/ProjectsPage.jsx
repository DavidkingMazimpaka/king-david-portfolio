import { useState, useEffect } from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Extract all unique technologies from projects
  const allTechnologies = ['all', ...new Set(projects.flatMap(project => project.technologies))];
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.technologies.includes(activeFilter))
      );
    }
  }, [activeFilter]);
  
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Explore my latest work. These projects showcase my skills, problem-solving abilities, and attention to detail.
        </p>
      </div>
      
      <ProjectFilter 
        technologies={allTechnologies}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
        
        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center py-16">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-300">
              No projects match the selected filter. Try selecting a different technology.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;