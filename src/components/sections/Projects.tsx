import React, { useState } from 'react';
import { projects } from '../../data/resumeData';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="section-container">
        <h2 className="heading-2 text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Project Image */}
              <div 
                className="w-full lg:w-1/2 relative"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="overflow-hidden rounded-lg shadow-xl relative aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === project.id ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-primary-dark/40 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
                    hoveredId === project.id ? 'opacity-100' : ''
                  }`}>
                    <div className="flex gap-4">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors text-gray-800"
                          aria-label="View GitHub repository"
                        >
                          <Github size={24} />
                        </a>
                      )}
                      {project.links.live && (
                        <a 
                          href={project.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors text-gray-800"
                          aria-label="Visit live site"
                        >
                          <ExternalLink size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className={`absolute -z-10 ${
                  index % 2 === 0 ? '-bottom-4 -right-4' : '-bottom-4 -left-4'
                } w-full h-full border-2 border-primary-light dark:border-primary-light rounded-lg`}></div>
              </div>
              
              {/* Project Info */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md mb-4">
                  <p className="paragraph mb-0">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary-light/20 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <Github size={18} /> GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ExternalLink size={18} /> Live Demo
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

export default Projects;