import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Achievements from "./components/sections/Achievements";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import { initializeAnimations } from "./utils/animationObserver";

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Chirag Gupta | Full-Stack Developer";

    // Initialize animations
    const cleanupAnimations = initializeAnimations();

    return () => {
      cleanupAnimations();
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
