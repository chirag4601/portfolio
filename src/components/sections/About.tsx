import React from 'react';

import ChiragImage from '../../assests/chiragGraduation.png';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-2/3">
            <h2 className="heading-2">About Me</h2>
            <div className="space-y-4 paragraph">
              <p>
                Hello! I'm Chirag, an <span className="text-primary dark:text-primary-light font-medium">ownership-driven Full-Stack Developer</span> with over 2 years of experience designing and building exceptional digital experiences.
              </p>
              <p>
                I specialize in developing fast and efficient systems through <span className="text-primary dark:text-primary-light font-medium">React.js, Django, and AWS</span>. As a proactive innovator, I have created real-time analytics solutions and automation-first architectures that make a significant impact.
              </p>
              <p>
                My journey began at the <span className="text-primary dark:text-primary-light font-medium">Indian Institute of Technology Delhi</span>, where I earned my Bachelor of Technology degree. Since then, I've worked with startups and established companies to create efficient, scalable solutions for complex problems.
              </p>
              <p>
                I'm passionate about clean code, performance optimization, and creating intuitive user experiences. I enjoy taking on challenges that push my skills to new heights and contribute to meaningful projects.
              </p>
              <p>
                When I'm not coding, you might find me solving algorithmic problems on platforms like LeetCode, where I've solved over <span className="text-primary dark:text-primary-light font-medium">1,200 Data Structures and Algorithms problems</span>.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/3 w-full">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-xl">
                <img 
                  src={ChiragImage}
                  alt="Profile" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-light dark:border-primary-light rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-light/20 dark:bg-primary-light/10 rounded-lg -z-10"></div>
            </div>
            
            <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Quick Info</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary dark:text-primary-light font-medium min-w-24">Location:</span>
                  <span className="text-gray-700 dark:text-gray-300">India</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary dark:text-primary-light font-medium min-w-24">Education:</span>
                  <span className="text-gray-700 dark:text-gray-300">B.Tech, IIT Delhi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary dark:text-primary-light font-medium min-w-24">Experience:</span>
                  <span className="text-gray-700 dark:text-gray-300">2+ Years</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary dark:text-primary-light font-medium min-w-24">Interests:</span>
                  <span className="text-gray-700 dark:text-gray-300">Full-Stack, AI, Data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;