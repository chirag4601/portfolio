import React, { useRef, useEffect, useState } from 'react';
import { skillCategories } from '../../data/resumeData';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-20" ref={sectionRef}>
      <div className="section-container">
        <h2 className="heading-2 text-center mb-12">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name} 
              className="card p-6 slide-up"
              style={{ animationDelay: `${index * 100}ms`, animationPlayState: isVisible ? 'running' : 'paused' }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: isVisible ? `${skill.proficiency}%` : '0%',
                          transitionDelay: `${index * 50}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Technology badges section */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-8">
            Technologies I've Worked With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'TypeScript', 'Next.js', 'Django', 'Python', 'AWS', 'Node.js', 'Spring Boot', 'Flutter', 'Docker', 'PostgreSQL', 'MongoDB'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-primary-light/20 dark:hover:bg-primary-light/10 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;