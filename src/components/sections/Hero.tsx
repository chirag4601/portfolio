import { FC, useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Linkedin, Github } from "lucide-react";
import { socialLinks } from "../../data/resumeData";

const Hero: FC = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [text, setText] = useState("I");
  const fullText = "I build exceptional digital experiences.";
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.substring(0, index + 1));
        setIndex((prev) => (prev + 1) % fullText.length);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github className="mr-2" size={20} />;
      case "Linkedin":
        return <Linkedin className="mr-2" size={20} />;
      default:
        return null;
    }
  };

  const socialLinkButtons = socialLinks.filter(
    (link) => link.name === "GitHub" || link.name === "LinkedIn",
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-primary dark:via-primary-dark dark:to-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/50 dark:bg-primary/10 backdrop-blur-sm"></div>

      {/* Animated particles background effect */}
      <div className="particles-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 dark:bg-primary-light/10"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse-slow ${Math.random() * 4 + 3}s infinite`,
            }}
          ></div>
        ))}
      </div>

      <div className="section-container relative z-10 md:w-[750px]">
        <div className="">
          <h2 className="text-lg md:text-xl font-medium text-primary dark:text-primary-light mb-2 fade-in">
            Hi, my name is
          </h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 fade-in delay-100">
            Chirag Gupta
          </h1>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-secondary-light mb-6 fade-in delay-200">
            {text}
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl fade-in delay-300">
            I'm a Full-Stack Developer specializing in React.js, Django, and
            AWS. Currently, I'm focused on building fast and efficient systems
            with real-time analytics and automation-first architectures.
          </p>

          <div className="flex flex-wrap gap-4 fade-in delay-400">
            <a href="#contact" className="btn-primary">
              Contact Me <ArrowRight size={18} />
            </a>

            {socialLinkButtons.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {renderSocialIcon(link.icon)}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {showArrow && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow fade-in delay-500">
          <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
            Scroll Down
          </p>
          <ChevronDown className="text-gray-600 dark:text-gray-300" size={24} />
        </div>
      )}
    </section>
  );
};

export default Hero;
