import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import im1 from './dp/im1.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Rayan_Alam_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with AI/Robotics theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {/* Profile Picture */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src={im1}
                alt="Rayan Alam"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Animated ring around profile picture */}
            <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-2 border-blue-400 animate-ping opacity-20"></div>
          </div>
        </div>

        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Rayan Alam
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200 font-light">
            AI & Robotics Enthusiast | CS Student at AIUB
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating intelligent systems that bridge the gap between 
            artificial intelligence and real-world applications through robotics and automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore My Work
            </button>
            <button
              onClick={handleDownloadCV}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;