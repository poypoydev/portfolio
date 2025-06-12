import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                className={`text-white font-medium transition-all duration-300 hover:-translate-x-2 inline-block
                  ${activeSection === id 
                    ? 'text-yellow-400 hover:text-yellow-600' 
                    : 'hover:text-yellow-400'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
