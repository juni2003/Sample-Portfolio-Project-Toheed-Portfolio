import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';


//Cover pics for projects
const project1Cover = "/project1.jpg";
const project2Cover = "/project2.jpg";
const project3Cover = "/project3.jpg";
const project4Cover = "/project4.jpg";
const project5Cover = "/project5.jpg";

const ProjectSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  // Project data with merged project 2
  const projects = [
    {
      id: 1,
      title: "The Two Friends and the Bear",
      subtitle: "Illustrated Short Story",
      cover: project2Cover,
      folder: "friends-bear",
      briefDescription: "A digital illustration series bringing to life the classic fable with dynamic lighting and expressive character designs.",
      fullDescription: "A digital illustration series bringing to life the classic fable \"A Friend in Need is a Friend Indeed.\" The visuals capture the journey of two friends through a forest, using dynamic lighting and expressive character designs to emphasize tension and camaraderie. The muted earthy palette and textured brushwork evoke a timeless, storybook feel.",
      tools: ["Adobe Photoshop"],
      briefSkills: ["Narrative Storytelling", "Atmospheric Lighting", "Character Design"],
      keySkills: [
        "Narrative storytelling through composition",
        "Atmospheric lighting and texture techniques", 
        "Character emotion and movement portrayal"
      ]
    },
    {
      id: 2,
      title: "Corporate Branding Solutions",
      subtitle: "Brand Identity & Corporate Design",
      cover: project3Cover,
      folder: "identity-suite", 
      briefDescription: "A comprehensive branding package combining travel-themed identity design with corporate communications for modern businesses.",
      fullDescription: "A comprehensive branding solution that merges the adventurous spirit of Globe Trek's travel-themed identity with the professional sophistication of AlphaWave Technologies' corporate communications. This project showcases versatility in brand design, from wanderlust-inspired motifs with minimalist typography to sleek IT solutions pamphlets featuring clean layouts and geometric precision. The cohesive approach demonstrates expertise in both creative exploration and corporate authority.",
      tools: ["Adobe Illustrator"],
      briefSkills: ["Brand Identity", "Corporate Design", "Print Layout"],
      keySkills: [
        "Logo and brand system design",
        "Information design and data visualization",
        "Corporate aesthetic mastery",
        "Consistent visual identity across collateral",
        "Balancing whitespace and content density"
      ]
    },
    {
      id: 3,
      title: "Magazine 1", 
      subtitle: "Editorial Design",
      folder: "uni-mag",
      cover: project5Cover,
      briefDescription: "A vibrant magazine spread covering campus events with bold headlines, grid-based organization, and dynamic visual storytelling.",
      fullDescription: "A vibrant magazine spread covering campus events (sports festivals, entrepreneurial expos). The layout uses bold headlines, grid-based organization, and action shots to create energy. Sections like \"Save Humanity\" incorporate dramatic typography and symbolic imagery (e.g., peace flags) for visual impact, showcasing the ability to maintain thematic consistency across diverse content.",
      tools: ["Adobe Illustrator"],
      briefSkills: ["Editorial Layout", "Typography", "Visual Hierarchy"],
      keySkills: [
        "Multi-page layout design",
        "Typography pairing and hierarchy", 
        "Thematic consistency across diverse content"
      ]
    },
    {
      id: 4,
      title: "Magazine 2",
      subtitle: "Fashion & Lifestyle Editorial",
      folder: "customize-pk",
      cover: project1Cover,
      briefDescription: "A lifestyle magazine feature blending product photography with minimalist layouts and versatile editorial design approaches.",
      fullDescription: "A lifestyle magazine feature promoting handmade formal shoes, blending product photography with minimalist text layouts. The \"Batman\" movie promo page contrasts dark, cinematic visuals with bold typography, showcasing versatility in editorial tone and the ability to adapt design language from luxury product promotion to pop culture marketing.",
      tools: ["Adobe Illustrator"],
      briefSkills: ["Product Design", "Editorial Tone", "Call-to-Action"],
      keySkills: [
        "Product integration in editorial contexts",
        "Tone adaptation (luxury vs. pop culture)",
        "Call-to-action design (QR codes/app links)"
      ]
    },
    {
      id: 5,
      title: "Momal Rano",
      subtitle: "Illustrated Folktale",
      folder: "momal-rano", 
      cover: project4Cover,
      briefDescription: "A richly illustrated adaptation of the tragic love story using painterly textures, dramatic compositions, and cultural storytelling.",
      fullDescription: "A richly illustrated adaptation of the tragic love story \"Momal Rano,\" blending painterly textures with dramatic compositions. The cover art uses symbolic flames and regal character designs to evoke romance and fate, while interior spreads (e.g., King Humeer's desert chase) employ dynamic perspectives and warm hues to bring this cultural narrative to life.",
      tools: ["Adobe Photoshop"],
      briefSkills: ["Cultural Storytelling", "Character Design", "Color Theory"],
      keySkills: [
        "Cultural storytelling through visuals",
        "Detailed background and costume design",
        "Emotional tone setting via color theory"
      ]
    }
  ];

  // Project-specific image arrays (update with your actual image names)
  const projectImages = {
    'friends-bear': [
      '/projects/friends-bear/1.jpg',
      '/projects/friends-bear/2.jpg',
      '/projects/friends-bear/3.jpg',
      '/projects/friends-bear/4.jpg',
      '/projects/friends-bear/5.jpg',
      '/projects/friends-bear/6.jpg',
      '/projects/friends-bear/7.jpg',
      '/projects/friends-bear/8.jpg',
      '/projects/friends-bear/9.jpg',
      '/projects/friends-bear/10.jpg',
      '/projects/friends-bear/11.jpg',
    ],
    'identity-suite': [
      '/projects/identity-suite/1.jpg',
      '/projects/identity-suite/2.jpg',
      '/projects/identity-suite/3.jpg',
      '/projects/identity-suite/4.jpg',
      '/projects/identity-suite/5.jpg',
      '/projects/identity-suite/6.jpg',
      '/projects/identity-suite/7.jpg',
      '/projects/identity-suite/8.jpg',
      '/projects/identity-suite/9.jpg',
      '/projects/identity-suite/10.jpg',
      '/projects/identity-suite/11.jpg',
      '/projects/identity-suite/12.jpg',
      '/projects/identity-suite/13.jpg',
      '/projects/identity-suite/14.jpg',

    ],
    'uni-mag': [
      '/projects/uni-mag/1.jpg',
      '/projects/uni-mag/2.jpg',
      '/projects/uni-mag/3.jpg',
      '/projects/uni-mag/4.jpg',
      '/projects/uni-mag/5.jpg',
      '/projects/uni-mag/6.jpg',
    ],
    'customize-pk': [
      '/projects/customize-pk/1.jpg',
      '/projects/customize-pk/2.jpg',
      '/projects/customize-pk/3.jpg',
      '/projects/customize-pk/4.jpg',
      '/projects/customize-pk/5.jpg',
      '/projects/customize-pk/6.jpg',


    ],
    'momal-rano': [
      '/projects/momal-rano/1.jpg',
      '/projects/momal-rano/2.jpg',
      '/projects/momal-rano/3.jpg',
      '/projects/momal-rano/4.jpg',
      '/projects/momal-rano/5.jpg',
      '/projects/momal-rano/6.jpg',
      '/projects/momal-rano/7.jpg',
      '/projects/momal-rano/8.jpg',
      '/projects/momal-rano/9.jpg',
      '/projects/momal-rano/10.jpg',

    ]
  };

  const getProjectImages = (folder) => {
    return projectImages[folder] || ['/projects/' + folder + '/cover.jpg'];
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      const images = getProjectImages(selectedProject.folder);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const images = getProjectImages(selectedProject.folder);
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeProjectModal();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedProject]);

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-gray-50">
      <div className='w-full flex justify-center'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className='w-full flex justify-center'>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of creative projects spanning illustration, branding, editorial design, and cultural storytelling.
          </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover-lift cursor-pointer transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => openProjectModal(project)}
            >
                {/* Project Cover Image (forced fixed height) */}
              <div className="relative w-full h-64 overflow-hidden bg-gray-200">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'center center' }}
                  />
                </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-purple-600 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.briefDescription}
                </p>

                {/* Tools */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Brief Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.briefSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedProject.title}
                </h3>
                <p className="text-purple-600 font-medium">
                  {selectedProject.subtitle}
                </p>
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
              {/* Image Gallery */}
              <div className="lg:w-2/3 relative bg-gray-100">
                <div className="relative h-64 lg:h-full min-h-[400px]">
                  <img
                    src={getProjectImages(selectedProject.folder)[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&auto=format`;
                    }}
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
                    {currentImageIndex + 1} / {getProjectImages(selectedProject.folder).length}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/3 p-6 overflow-y-auto">
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Description</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Skills</h4>
                    <ul className="space-y-2">
                      {selectedProject.keySkills.map((skill, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 text-sm">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default ProjectSection;