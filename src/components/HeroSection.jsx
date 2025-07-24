import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Eye } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main heading */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-gray-800">Syed Toheed</span>
              <span className="block gradient-text">Mehdi</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Visual Storyteller & Digital Artist
            </p>
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
              Crafting immersive narratives through illustration, branding, and editorial design 
              that bridge tradition with contemporary aesthetics
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToProjects}
                className="btn-primary flex items-center gap-2 group"
              >
                <Eye size={20} />
                View My Work
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-300 hover:shadow-lg"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown size={20} className="animate-bounce" />
            </div>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;