import React from 'react';
import { education } from '../../data/resumeData';
import { BookOpen, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="section-container">
        <h2 className="heading-2 text-center mb-12">
          Education
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {education.map((edu) => (
            <div key={edu.id} className="card p-6 mb-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary-light/20 dark:bg-primary-light/10 flex items-center justify-center">
                  <BookOpen className="text-primary dark:text-primary-light" size={32} />
                </div>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {edu.institution}
                </h3>
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <p className="text-primary dark:text-primary-light font-medium">
                    {edu.degree}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {edu.period}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {edu.location}
                </p>
                
                <div className="flex items-center text-success dark:text-success">
                  <Award size={20} className="mr-2" />
                  <span className="font-medium">JEE Advanced Rank 1886</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Additional education info */}
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Continuing Education
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary-light/20 dark:bg-primary-light/10 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-primary dark:text-primary-light font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Data Structures & Algorithms:</span> Solved 1200+ problems across various competitive programming platforms
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary-light/20 dark:bg-primary-light/10 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-primary dark:text-primary-light font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Online Courses:</span> Continually expanding knowledge in modern web development, AI, and cloud architecture
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary-light/20 dark:bg-primary-light/10 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-primary dark:text-primary-light font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Professional Development:</span> Staying updated with the latest industry trends and technologies
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;