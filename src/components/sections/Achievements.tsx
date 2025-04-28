import React, { useRef, useEffect, useState } from 'react';
import { achievements } from '../../data/resumeData';
import { Code2, Trophy, Rocket } from 'lucide-react';

const Achievements: React.FC = () => {
  const [counters, setCounters] = useState<Record<string, number>>({
    'DSA': 0,
    'JEE': 0,
    'Startup': 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const targets = {
    'DSA': 1200,
    'JEE': 1886,
    'Startup': 500
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={32} className="text-primary-light" />;
      case 'Trophy':
        return <Trophy size={32} className="text-primary-light" />;
      case 'Rocket':
        return <Rocket size={32} className="text-primary-light" />;
      default:
        return null;
    }
  };

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

  useEffect(() => {
    if (!isVisible) return;

    const intervals: NodeJS.Timeout[] = [];

    Object.keys(targets).forEach((key, index) => {
      const target = targets[key as keyof typeof targets];
      const duration = 2000; // ms
      const steps = 30;
      const increment = Math.ceil(target / steps);
      
      const interval = setInterval(() => {
        setCounters(prev => {
          const current = prev[key];
          if (current >= target) {
            clearInterval(interval);
            return prev;
          }
          const next = Math.min(current + increment, target);
          return { ...prev, [key]: next };
        });
      }, duration / steps);
      
      intervals.push(interval);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [isVisible]);

  return (
    <section id="achievements" className="bg-white dark:bg-gray-900 py-20" ref={sectionRef}>
      <div className="section-container">
        <h2 className="heading-2 text-center mb-12">
          Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className="card p-6 flex flex-col items-center text-center slide-up"
              style={{ 
                animationDelay: `${achievement.id * 100}ms`,
                animationPlayState: isVisible ? 'running' : 'paused'
              }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-light/20 dark:bg-primary-light/10 flex items-center justify-center mb-4">
                {renderIcon(achievement.icon)}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {achievement.title.includes('1200+') && counters['DSA'] > 0 && (
                  <span>{counters['DSA']}+</span>
                )}
                {achievement.title.includes('JEE') && counters['JEE'] > 0 && (
                  <span>JEE Advanced Rank {counters['JEE']}</span>
                )}
                {achievement.title.includes('Startup') && (
                  <span>Startup Co-founder</span>
                )}
              </h3>
              
              <p className="paragraph">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;