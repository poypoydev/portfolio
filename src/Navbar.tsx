import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're at the bottom of the page
      const isAtBottom = scrollPosition + viewportHeight >= documentHeight - 50;
      
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // Regular section detection
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Make the detection zone larger for shorter sections
          const detectionThreshold = rect.height < viewportHeight ? rect.height / 2 : viewportHeight / 3;
          
          if (rect.top <= detectionThreshold && rect.bottom >= 0) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const createWaveLetters = (text: string) => {
    return text.split('').map((letter, index) => (
      <span 
        key={index} 
        className={`wave-letter inline-block ${letter === ' ' ? 'mr-1' : ''}`}
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        {letter === '' ? '\u00A0' : letter}
      </span>
    ));
  };

  return (
    <nav className="fixed top-16 right-12 z-50">
      <div className="flex justify-end">
        <ul className="flex flex-col space-y-2 list-none m-0 p-0">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Get in touch" }
          ].map(({ id, label }) => (
            <li key={id} className="text-right">
              <a 
                href={`#${id}`}
                className={`text-white font-medium transition-all duration-300 wave-text inline-block
                  ${activeSection === id 
                    ? 'text-yellow-400 hover:text-yellow-600' 
                    : 'hover:text-yellow-400'}`}
              >
                {createWaveLetters(label)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
