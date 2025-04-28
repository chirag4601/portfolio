export const createIntersectionObserver = (elementSelector: string, animationClass: string) => {
  const elements = document.querySelectorAll(elementSelector);
  
  if (elements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach((element) => {
    observer.observe(element);
  });
  
  return observer;
};

export const initializeAnimations = () => {
  const fadeInObserver = createIntersectionObserver('.fade-in-element', 'fade-in');
  const slideUpObserver = createIntersectionObserver('.slide-up-element', 'slide-up');
  
  return () => {
    if (fadeInObserver) fadeInObserver.disconnect();
    if (slideUpObserver) slideUpObserver.disconnect();
  };
};