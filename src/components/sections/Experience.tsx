import React, { useState } from 'react';
import { experiences } from '../../data/resumeData';
import { ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="section-container">
        <h2 className="heading-2 text-center mb-12">
          Professional Experience
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {/* Tab navigation */}
          <div className="md:w-1/3">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible pb-4 md:pb-0 mb-4 md:mb-0 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  className={`py-3 px-4 text-left whitespace-nowrap md:whitespace-normal font-medium transition-colors duration-300 ${
                    activeTabIndex === index
                      ? 'text-primary dark:text-primary-light border-primary dark:border-primary-light md:border-b-0 md:border-r-4 border-b-2'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light'
                  }`}
                  onClick={() => setActiveTabIndex(index)}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab content */}
          <div className="md:w-2/3">
            <div className="slide-up">
              <div className="mb-1">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {experiences[activeTabIndex].role}
                  <span className="text-primary-light dark:text-primary-light"> @ {experiences[activeTabIndex].company}</span>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {experiences[activeTabIndex].period} | {experiences[activeTabIndex].location}
                </p>
              </div>
              
              <ul className="space-y-3">
                {experiences[activeTabIndex].description.map((desc, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="text-primary-light dark:text-primary-light mt-1 shrink-0" size={16} />
                    <span className="paragraph ml-2">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Timeline view for mobile */}
        <div className="mt-16 md:hidden">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
            Career Timeline
          </h3>
          <div className="space-y-0">
            {experiences.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="pt-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </p>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">
                    {exp.role} | {exp.company}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-2">
                    {exp.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;