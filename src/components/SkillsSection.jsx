import React, { useEffect, useRef, useState } from 'react';
import { Brush, Layers, Type, Monitor } from 'lucide-react';

const SkillsSection = () => {
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

  const skillCategories = [
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Illustration & Storytelling",
      color: "from-pink-500 to-rose-500",
      skills: [
        "Character design and emotional expression",
        "Narrative composition and visual flow",
        "Cultural storytelling through imagery",
        "Advanced texture and lighting techniques"
      ]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Brand Identity Design",
      color: "from-blue-500 to-cyan-500",
      skills: [
        "Logo development and visual identity systems",
        "Print collateral and marketing materials",
        "Typography hierarchy and brand consistency",
        "Professional presentation design"
      ]
    },
    {
      icon: <Type className="w-8 h-8" />,
      title: "Editorial Design",
      color: "from-purple-500 to-indigo-500",
      skills: [
        "Magazine layouts and multi-page design",
        "Information architecture and data visualization",
        "Typography pairing and visual hierarchy",
        "Content adaptation across different tones"
      ]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Technical Proficiency",
      color: "from-green-500 to-emerald-500",
      skills: [
        "Adobe Photoshop: Advanced digital painting, texture creation",
        "Adobe Illustrator: Vector illustration, print-ready layouts",
        "Color theory and composition principles",
        "Print and digital media optimization"
      ]
    }
  ];

  const softwareSkills = [
    { name: "Adobe Photoshop", level: 95, color: "bg-blue-500" },
    { name: "Adobe Illustrator", level: 92, color: "bg-orange-500" },
    { name: "Typography", level: 88, color: "bg-purple-500" },
    { name: "Color Theory", level: 90, color: "bg-green-500" },
    { name: "Brand Design", level: 85, color: "bg-pink-500" },
    { name: "Editorial Layout", level: 87, color: "bg-indigo-500" }
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-white w-full">
      {/* Use container-custom for consistent alignment */}
      <div className="container-custom text-center">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800">
            Core <span className="gradient-text">Skills</span>
          </h2>
          <div className='w-full flex justify-center'>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 text-center">
          A comprehensive toolkit for creating compelling visual narratives across 
          traditional and digital media
        </p>
        </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover-lift transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${category.color} text-white mr-3 sm:mr-4 flex-shrink-0`}>
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-2 sm:space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mt-2 mr-3 flex-shrink-0`}></div>
                    <span className="text-sm sm:text-base text-gray-600 leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Software Proficiency */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Software <span className="gradient-text">Proficiency</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Technical expertise across industry-standard design tools
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {softwareSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">{skill.name}</span>
                    <span className="text-xs sm:text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;