import React from 'react';
import { Github, Linkedin, Code, Heart } from 'lucide-react';
import { socialLinks } from '../../data/resumeData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={20} />;
      case 'Linkedin':
        return <Linkedin size={20} />;
      case 'Code':
        return <Code size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary dark:text-primary-light">
              Chirag<span className="text-primary-light dark:text-white">.</span>
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Full-Stack Developer & Tech Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                aria-label={link.name}
              >
                {renderSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
            © {currentYear} Chirag Gupta. Made with 
            <Heart size={16} className="mx-1 text-error" fill="currentColor" /> 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;