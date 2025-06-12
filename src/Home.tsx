import React from "react";
import Navbar from "./Navbar";
import ParticlesBackground from "./components/ParticlesBackground";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Welcome Section - Full viewport height */}
        <section id="home" className="relative min-h-screen">
          <div className="absolute inset-0 overflow-hidden">
            <ParticlesBackground />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-[#131313]/50 to-[#131313] pointer-events-none"></div>
          </div>
          
          <div className="relative text-center w-full px-8 md:px-16 z-10 min-h-screen flex items-start pt-64 justify-center">
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 leading-tight uppercase">
                Hello there! I'm glad you're here.
              </h1>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-yellow-400 uppercase mb-16">
                I DESIGN AND DEVELOP ELEGANT WEBSITES. 
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                <div className="group">
                  <div className="mb-4">
                    <svg 
                      className="w-8 h-8 mx-auto text-yellow-400/80 group-hover:text-yellow-400 transition-all duration-300 animate-float" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.5" 
                        d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg text-white font-medium transition-all duration-300 group-hover:text-yellow-400">
                    UI/UX Designer
                  </h3>
                  <div className="h-1 w-12 bg-yellow-400/50 mx-auto mt-3 transition-all duration-300 group-hover:w-24"></div>
                </div>
                <div className="group">
                  <div className="mb-4">
                    <svg 
                      className="w-8 h-8 mx-auto text-yellow-400/80 group-hover:text-yellow-400 transition-all duration-300 animate-float-delay-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.5" 
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg text-white font-medium transition-all duration-300 group-hover:text-yellow-400">
                    Potential Full-Stack Web Developer
                  </h3>
                  <div className="h-1 w-12 bg-yellow-400/50 mx-auto mt-3 transition-all duration-300 group-hover:w-24"></div>
                </div>
                <div className="group">
                  <div className="mb-4">
                    <svg 
                      className="w-8 h-8 mx-auto text-yellow-400/80 group-hover:text-yellow-400 transition-all duration-300 animate-float-delay-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.5" 
                        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg text-white font-medium transition-all duration-300 group-hover:text-yellow-400">
                    Video Editor
                  </h3>
                  <div className="h-1 w-12 bg-yellow-400/50 mx-auto mt-3 transition-all duration-300 group-hover:w-24"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Container for other sections with solid background */}
        <div className="relative z-20 bg-[#131313]">
          {/* About Me Section */}
          <section id="about" className="min-h-screen w-full bg-[#131313] flex items-center justify-center py-16">
            <div className="container mx-auto px-4 md:px-16 lg:px-24">
              <h2 className="text-2xl font-bold text-white mb-24 text-center">About Me</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
                {/* Left Column - Photo */}
                <div className="w-full md:w-1/2 max-w-[400px]">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img 
                      src="src/img/Pantaras-profile.jpeg"
                      alt="Developer Profile"
                      className="rounded-2xl shadow-xl object-cover w-full h-[400px] md:h-[500px] object-[center_60%]"
                    />
                  </div>
                </div>

                {/* Right Column - Information */}
                <div className="w-full md:w-1/2 max-w-xl">
                  <h3 className="text-4xl font-light text-white mb-6">
                    Hi, I'm <span className="font-semibold text-white">Jeremiah P. Pantaras</span>
                  </h3>
                  <p className="text-gray-300 mb-8 text-sm leading-relaxed border-l-2 border-yellow-400/50 pl-4">
                    A 23-year old aspiring Full-Stack Web Developer based in Bacolod City, Philippines. I specialize in creative and interactive websites using React, Vite, and Tailwind CSS, with additional experience in Python and the Django framework. Outside programming I am Proficient with Adobe Photoshop, Adobe Lightroom, Adobe Illustrator, Adobe Premiere, and Adobe After Effects. Beyond the virtual world, I engage in outdoor activities such as running, swimming, and cycling.
                  </p>
                  <div className="space-y-6">
                    {/* Tech Stack and Tools */}
                    <div className="mt-8">
                      <h4 className="text-yellow-400 font-medium mb-4">Tech Stack & Tools</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {/* Development Tools */}
                        <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8 mb-2" alt="React" />
                          <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">React</span>
                        </div>
                        <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                          <img src="https://vitejs.dev/logo.svg" className="w-8 h-8 mb-2" alt="Vite" />
                          <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Vite</span>
                        </div>
                        <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="w-8 h-8 mb-2" alt="Tailwind" />
                          <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Tailwind</span>
                        </div>
                        <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8 mb-2" alt="Python" />
                          <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Python</span>
                        </div>
                        <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                          <svg
                            className="w-8 h-8 mb-2 text-green-600 group-hover:text-yellow-400 transition-colors duration-300"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"/>
                          </svg>
                          <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Django</span>
                        </div>
                        <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-8 h-8 mb-2" alt="MySQL" />
                          <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">MySQL</span>
                        </div>
                        
                        {/* Adobe Tools */}
                        <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" className="w-8 h-8 mb-2" alt="Photoshop" />
                          <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Photoshop</span>
                        </div>
                        <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" className="w-8 h-8 mb-2" alt="Premiere Pro" />
                          <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Premiere</span>
                        </div>
                        <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" className="w-8 h-8 mb-2" alt="After Effects" />
                          <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">After Effects</span>
                        </div>
                        <div className="group flex flex-col items-center justify-center p-3 rounded-lg hover:bg-yellow-400/5 transition-all duration-300">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" className="w-8 h-8 mb-2 hue-rotate-180" alt="Lightroom" />
                          <span className="text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">Lightroom</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen w-full bg-[#131313] flex items-center justify-center py-16">
            <div className="container mx-auto px-4 md:px-16 lg:px-24">
              <h2 className="text-3xl font-bold text-white mb-16 text-center">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Project Card 1 */}
                <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src="project1.jpg" 
                      alt="Project 1"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">Project Title</h3>
                    <p className="text-gray-400 text-sm mb-4">Brief description of the project goes here. What was built and what technologies were used.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">React</span>
                      <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">TypeScript</span>
                      <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Tailwind</span>
                    </div>
                  </div>
                </div>

                {/* Project Card 2 */}
                <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src="project2.jpg" 
                      alt="Project 2"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">Project Title</h3>
                    <p className="text-gray-400 text-sm mb-4">Brief description of the project goes here. What was built and what technologies were used.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">React</span>
                      <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">TypeScript</span>
                      <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Tailwind</span>
                    </div>
                  </div>
                </div>

                {/* Project Card 3 */}
                <div className="group bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-yellow-400/5 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src="project3.jpg" 
                      alt="Project 3"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">Project Title</h3>
                    <p className="text-gray-400 text-sm mb-4">Brief description of the project goes here. What was built and what technologies were used.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">React</span>
                      <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">TypeScript</span>
                      <span className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full">Tailwind</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get in Touch Section */}
          <section id="contact" className="min-h-screen w-full bg-[#131313] flex items-center justify-center py-16">
            <div className="container mx-auto px-4 md:px-16 lg:px-24">
              <h2 className="text-3xl font-bold text-white mb-16 text-center">Get in Touch</h2>
              <div className="max-w-3xl mx-auto bg-[#1A1A1A] rounded-2xl p-8 md:p-12">
                <p className="text-gray-300 text-center mb-8">
                  I'm currently open for freelance work and potential job opportunities. 
                  Feel free to reach out if you'd like to work together!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <a 
                    href="mailto:your.email@example.com" 
                    className="group flex items-center justify-center gap-3 bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 py-4 px-6 rounded-xl transition-all duration-300"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.5" 
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    Email Me
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 py-4 px-6 rounded-xl transition-all duration-300"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
                <div className="mt-8 text-center">
                  <a 
                    href="https://github.com/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Check out my GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
