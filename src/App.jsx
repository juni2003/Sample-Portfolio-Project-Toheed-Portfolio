import React from 'react';
import Navbar from './components/ui/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/ui/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Animated background - positioned behind everything */}
      <div className="fixed inset-0 z-0">
        <Background />
      </div>
     
      {/* Navigation - fixed positioning with proper z-index */}
      <div className="relative z-50">
        <Navbar />
      </div>
     
      {/* Main content - proper container and spacing */}
      <main className="relative z-10">
        <div className="w-full">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
     
      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;