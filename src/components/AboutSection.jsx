import React, { useEffect, useRef, useState } from 'react';
import { Palette, Heart, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Cultural Storytelling",
      description: "Bringing traditional narratives to life with modern design sensibilities"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Emotional Design",
      description: "Creating visuals that resonate and connect with diverse audiences"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Technical Precision",
      description: "Combining artistic vision with professional design standards"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gradient-to-b from-white to-gray-50 w-full">
      {/* Main Container */}
      <div className="container-custom">
        {/* Section Header - Centered */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>

            <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
              <p className="text-base sm:text-lg">
                I'm a passionate Computer Arts student who believes design is the intersection of 
                <span className="font-semibold text-gray-800"> logic and emotion</span>. Whether I'm 
                simplifying complex corporate concepts for AlphaWave Technologies or breathing life 
                into timeless folktales like Momal Rano, my work centers on creating meaningful visual experiences.
              </p>
              
              <p className="text-base sm:text-lg">
                My approach combines <span className="font-semibold text-gray-800">technical precision</span> with 
                cultural storytelling, drawing inspiration from both traditional narratives and modern design principles. 
                I specialize in transforming ideas into compelling visuals that resonate with diverse audiences.
              </p>
            </div>

            {/* Design Philosophy Quote */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border-l-4 border-purple-500">
              <blockquote className="text-base sm:text-lg italic text-gray-700">
                "Every project tells a story. My role is to ensure that story is told with clarity, 
                beauty, and cultural sensitivity."
              </blockquote>
            </div>
          </div>

          {/* Highlights */}
          <div className={`space-y-4 sm:space-y-6 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover-lift group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className={`mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { number: "6+", label: "Projects Completed" },
            { number: "2+", label: "Year's Experience" },
            { number: "100%", label: "Quality Work" },
            { number: "∞", label: "Creative Ideas" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;